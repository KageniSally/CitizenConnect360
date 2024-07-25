import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { Payload, User } from '../Models/usersModel';
import dotenv from 'dotenv'
import path from 'path'
import { DBHelper } from '../DBHelpers';

dotenv.config({ path: path.resolve(__dirname, "../../.env") })


export interface ExtendedRequest1 extends Request {
    info?: Payload
}



const dbInstance = new DBHelper
export function verifyToken(req: ExtendedRequest1, res: Response, next: NextFunction) {
    try {
        const token = req.headers['token'] as string
        if (!token) {
            return res.status(400).json({ message: ' No token provided.' });
        }
        // console.log(token);

        const decoded = jwt.verify(token, process.env.SECRET as string) as Payload;


        req.info = decoded;
        next();
    } catch (error) {
        return res.status(500).json(error);
    }
}