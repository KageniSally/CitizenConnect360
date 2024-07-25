export interface View{
    id:string,
    user_id:string,
    user_name:string
    title:string,
    description:string,
    date:string
}



export interface ViewRequest{
    title:string,
    description:string
}


export interface ViewResponse{
    message:string 
 }