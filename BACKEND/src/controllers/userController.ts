import { DBHelper } from "../DBHelpers";
import { Response, Request } from 'express'
import { User } from "../Models/userModel";
import Bcrypt from 'bcrypt'

const dbInstance = new DBHelper

//Get all Users
export async function getUsers(req: Request, res: Response) {
    try {
        const users = (await dbInstance.execute('getUsers', {})).recordset as User[]
        return res.status(200).json(users)
    } catch (error) {
        return res.status(500).json(error)
    }
}

export async function getUser(req: Request, res: Response) {
    try {
        const user = (await dbInstance.execute('getUserId', { id: req.params.id })).recordset[0] as User
        return res.status(200).json(user)
    } catch (error) {
        return res.status(500).json(error)
    }
}

export async function deleteUser(req: Request<{ id: string }>, res: Response) {
    
    try {
        const user = (await dbInstance.execute('getUserId', { id: req.params.id })).recordset[0] as User
        if (user && user.id) {
            await dbInstance.execute('deleteUser', { id: req.params.id })

            return res.status(200).json({ message: "User Deleted Successfully" })
        }

        return res.status(404).json({ message: "User Not Found" })

    } catch (error) {
        return res.status(500).json(error)
    }
}



//function to get all users that havent been approved
export async function getUserNotApproved(req:Request,res:Response) {
    
    console.log(req)
   try {
    console.log("here");
     const users=(await dbInstance.execute('getUserNotApproved',{})).recordset as User[]
     console.log(users)
     console.log("here")
     if(users){
        return res.status(200).json(users)
     }
     
   } catch (error) {
    return res.status(500).json(error)
   }
}


//function to get all users that have been approved
export async function getUserApproved(req:Request,res:Response) {
    try {
      const users=(await dbInstance.execute('getUserApproved',{})).recordset as User[]
      return res.status(200).json(users)
    } catch (error) {
     return res.status(500).json(error)
    }
 }


//Function to update user
 export async function updateUser(req: Request<{ id: string }>, res: Response) {
    try {
        const user = (await dbInstance.execute('getUserId', { id: req.params.id })).recordset[0] as User


        if (user && user.id) {
            const { name, email, password,profileImage } = req.body

            //if no error proceed to hash the password
            const hashedPass = await Bcrypt.hash(password, 10)



            dbInstance.execute('updateUser', {
                id: req.params.id,
                name,
                email,
                profileImage,
                password: hashedPass
            })

            return res.status(200).json({ message: "User Updated Successfully" })
        }

    } catch (error) {
        return res.status(500).json(error)
    }
}


//function to approve government official
export async function approveUser(req: Request<{ id: string }>, res: Response) {    
    try {
        const user = (await dbInstance.execute('getUserId', { id: req.params.id })).recordset[0] as User
        if (user && user.id) {
            await dbInstance.execute('approveUser', { id: req.params.id })
            return res.status(200).json({ message: "User Approved Successfully" })
        }

        return res.status(404).json({ message: "User Not Found" })

    } catch (error) {
        return res.status(500).json(error)
    }
}


