// export interface Poll{
//     id:string,
//     title:string,
//     createdBy:string,
//     choices:string[],
//     votes:number,
//     date:string
// }


export interface PollRequest{
    question:string,
    choices:string[],
}

export interface PollResponse{
    message:string 
 }


export interface Poll{
    id:string,
    question:string,
    createdBy:string
}


export interface PollChoices{
    id:string,
    choice:string,
    pollId:string
}

export interface Responses{
    id:string,
    pollId:string,
    userId:string,
    pollChoiceId:string
}