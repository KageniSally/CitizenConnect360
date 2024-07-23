export interface Poll{
    id:string,
    title:string,
    createdBy:string,
    options:string[],
    votes:number,
    date:string
}


export interface PollResponse{
    message:string 
 }