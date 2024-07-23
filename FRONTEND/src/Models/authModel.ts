export interface User{
    id: string,
    name: string,
    email: string,
    password: string,
    role: string,
    isEmailSent: number,
    isDeleted: number,
    isApproved:number,
    profile_image:string
}

export interface RegisterRequest{
    name:string,
    email:string,
    password:string,
    role:string
}


export interface RegisterResponse{
   message:string 
}

export interface LoginResponse{
    message:string;
    role:string,
    token:string,
    sub:string
}

export interface LoginRequest{
    email:string,
    password:string
}