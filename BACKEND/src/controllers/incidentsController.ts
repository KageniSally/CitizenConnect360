import { DBHelper } from "../DBHelpers";
import { ValidateIncidents } from "../Helpers/incidents";
import { ExtendedRequest1 } from "../Middleware";
import { Incidents } from "../Models/incidents";
import { Request,Response } from "express";
import {v4 as uid} from 'uuid'

const dbInstance=new DBHelper

//Function to get all incidents
export async function getIncidents(req:Request,res:Response){
    try {
        const incidents=(await dbInstance.execute('getIncidents',{})).recordset as Incidents[]

        return res.status(200).json(incidents)
    } catch (error) {
        return res.status(500).json(error)
    }
}


//Get Incident by Id
export async function getIncident(req:Request<{id:string}>,res:Response){
    try {
        const incident=(await dbInstance.execute('getIncident',{id:req.params.id})).recordset as Incidents[]
        return res.status(200).json(incident)
    } catch (error) {
        return res.status(500).json(error)
    }
}


//Function to add Incidence
export async function addIncidence(req:ExtendedRequest1,res:Response) {
    try {
        const id=uid()
        const reportedBy=req.info.sub
        const reporterName=req.info.name
        const {title,description,area,image,contact}=req.body


        const { error } = ValidateIncidents.validate(req.body)

        if (error) {
            return res.status(400).json(error.details[0].message)
        }

        dbInstance.execute('addIncidence',{id,title,description,area,image,contact,reportedBy, reporterName})
        return res.status(201).json("Incidence created sucessfully")
    } catch (error) {
        return res.status(500).json(error)
    }
    
}

//delete Incidence
export async function deleteIncident(req:Request<{id:string}>,res:Response) {
    try {
        //get incidence by Id
      const incidence=(await dbInstance.execute('getIncident',{id:req.params.id})).recordset[0] as Incidents


      if(incidence && incidence.id){
            await dbInstance.execute('deleteIncident',{id:req.params.id})
            return res.status(200).json({message:"Deleted Successfully"})
      }

      return res.status(404).json({message:"Incidence not found"})
        
    } catch (error) {
        return res.status(500).json(error)
    }
}