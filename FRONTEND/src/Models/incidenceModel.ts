export interface Incidence {
    id: string,
    title: string,
    description: string,
    image: string,
    reportedBy: string,
    reporterName:string,
    date: string,
    contact:string
}


export interface IncidentsRequest{
    title: string,
    description: string,
    image: string,
    area:string,
    contact:string
}

export interface IncidenceResponse{
    message:string 
 }
 