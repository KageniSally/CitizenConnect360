export interface User {
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

export interface Payload {
    sub: string,
    name: string,
    role:string
}