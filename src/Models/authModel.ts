export interface User{
    id: string,
    name: string,
    email: string,
    password: string,
    role_id: string,
    isEmailSent: number,
    isDeleted: number,
    isApproved:number,
    profile_image:string
}

export interface RegisterResponse{
   message:string 
}

export interface LoginResponse{
    message:string;
    role_id:number,
    token:string,
    sub:string
}

export interface LoginRequest{
    email:string,
    password:string
}