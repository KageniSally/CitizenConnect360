import { ValidateRegistration } from "../Helpers"
import { Response, Request } from 'express'
import { v4 as uid } from 'uuid'
import Bcrypt from 'bcrypt'
import { DBHelper } from '../DBHelpers'
import jwt from 'jsonwebtoken'
import { Payload, User } from "../Models/userModel"

//Instance of the class
const dbInstance = new DBHelper

//Register Function
export async function registerUser(req: Request, res: Response) {
    try {
        //id
        const id = uid()
        //Request Body
        const { name, email, password, role, isApproved } = req.body
        console.log(req.body)

        const { error } = ValidateRegistration.validate(req.body)

        if (error) {
            return res.status(400).json(error.details[0].message)
        }


        const userExists = (await dbInstance.execute('getUser', { email: email })).recordset as User[]
        if (userExists.length) {
            return res.status(400).json({ message: "User already exists" })
        }


        //if no error proceed to hash the password hashing
        const hashedPass = await Bcrypt.hash(password, 10)

        //make a connection to database
        dbInstance.execute('addUser', { id, name, email, password: hashedPass, role, isApproved })


        return res.status(201).json({ message: 'User created successfully' })
    } catch (error) {
        console.log("error occured");
        console.log(error);

        return res.status(500).json(error)
    }
}


//Login Function
export async function loginUser(req: Request<{ email: string }>, res: Response) {
    try {
        const { email, password } = req.body
        // console.log(req.body)


        const user = (await dbInstance.execute('getUser', { email: email })).recordset as User[]

        if (user.length !== 0) {
            const isValid = await Bcrypt.compare(password, user[0].password)
            if (user[0].isDeleted === 1) {
                return res.status(400).json({ message: 'Account not Found' })
            }

            if (isValid) {
                console.log("valid");

                const payload: Payload = {
                    sub: user[0].id,
                    name: user[0].name,
                    role: user[0].role
                }
                const token = jwt.sign(payload, process.env.SECRET as string, { expiresIn: '2h' })
                const { role } = payload
                const { sub } = payload
                console.log(token);


                return res.status(200).json({ message: 'Login sucessful!!!!!!!', token, role, sub })
            }
            return res.status(400).json({message:"Invalid Password"})

        }

    } catch (error) {
        return res.status(500).json(error)
    }
}


export async function forgotPassword(req: Request<{ email: string }>, res: Response) {
    console.log("here");
    
    try {
        
        //get user by email
        const user = (await dbInstance.execute('getUser', { email: req.params.email })).recordset[0] as User

        if (user && user.email) {
            const { password } = req.body
            console.log(password)


            //password will go through ten rounds of hashing
            const hashedPass = await Bcrypt.hash(password, 10)


            await dbInstance.execute('forgotPass', {
                email:req.params.email,
                password: hashedPass
            })

            return res.status(200).json({ message: "Password changed Successfully" })
        }
        return res.status(404).json({ message: "User Not Found" })

    } catch (error) {
        return res.status(500).json(error)
    }
}

