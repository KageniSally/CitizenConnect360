export interface Polls{
    id:string,
    question:string,
    createdBy:string,
    creatorName:string
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