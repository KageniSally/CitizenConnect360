import ejs from "ejs";
import { DBHelper } from "../DBHelpers";
import { sendEmail } from "../Helpers";

const dbInstance=new DBHelper

export interface User {
    id: string,
    name: string,
    email: string,
    password: string,
    role: string,
    isEmailSent: number,
    isDeleted: number,
    isApproved:number,
    profileImage:string
}

export async function run(){
    try {
        let users=(await dbInstance.query("SELECT * FROM Users WHERE isEmailSent=0")).recordset as User[]


        users.forEach(user=>{
            ejs.renderFile("Templates/register.ejs",{name:user.name, email:"test", loginUrl:"test"},async(err,data)=>{
              let message={
                to:user.email,
                from:process.env.Email,
                subject:"CitizenConnect360",
                html:`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to CitizenConnect360</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        .container {
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .header {
            text-align: center;
            padding-bottom: 20px;
        }
        .header img {
            width: 100px;
        }
        .content {
            text-align: left;
        }
        .content h1 {
            color: #333333;
        }
        .content p {
            color: #666666;
        }
        .footer {
            text-align: center;
            padding-top: 20px;
            color: #999999;
        }
        .button {
            display: inline-block;
            padding: 10px 20px;
            background-color: #007BFF;
            color: #ffffff;
            text-decoration: none;
            border-radius: 4px;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <img src="https://dynamic.design.com/preview/logodraft/7cdc05c9-b7cb-4f54-89e0-c4a74458fca2/image/large.png" alt="KenFinance Logo">
        </div>
        <div class="content">
            <h1>Welcome, ${user.name}!</h1>
            <p>Thank you for registering at CitizenConnect360, the platform dedicated to helping Kenyans learn about the Finance Bill and report incidences.</p>
            <p>We are excited to have you on board. Here are your registration details:</p>
            <ul>
                <li><strong>Name:</strong> ${user.name}</li>
                <li><strong>Email:</strong> ${user.email}</li>
            </ul>
            <p>You can now participate in polls, report incidences, and stay updated with the latest news on the Finance Bill.</p>
            <p>If you have any questions, feel free to contact us at support@CitizenConnect360.com.</p>
            <a href="<%= loginUrl %>" class="button">Login to your account</a>
        </div>
        <div class="footer">
            <p>&copy; 2024 KenFinance. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
`
              } 
              await sendEmail(message)
              console.log(data);
              
              dbInstance.query(`UPDATE Users SET isEmailSent=1 WHERE id='${user.id}'`)
              
            })
        })

    } catch (error) {
        
    }
}




//Forgot Password email
export async function forgotPass() {
    
    
}