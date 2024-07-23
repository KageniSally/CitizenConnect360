export interface View{
    id:string,
    submittedBy:string,
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