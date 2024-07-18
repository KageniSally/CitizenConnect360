import { DBHelper } from "../DBHelpers";
import { v4 as uid } from 'uuid'
import { Request, Response } from "express";
import { View } from "../Models/viewModel";

const dbInstance = new DBHelper

//Function to add a view
export async function addView(req: Request, res: Response) {
   try {
      const id = uid()
      const { title, description, user_id } = req.body
      console.log(id);
      
      
      await dbInstance.execute('addView', { id, title, description, user_id })
      return res.status(201).json({ message: "View added successfully" })
   } catch (error) {
      return res.status(500).json(error)
   }
}


//Function to get Views
export async function getViews(req: Request, res: Response) {
   try {
      const views = (await dbInstance.execute('getViews', {})).recordset as View[]
      console.log(views);
      
      return res.status(200).json(views)
   } catch (error) {
      return res.status(500).json(error)
   }
}


//Function to get a specific view
export async function getView(req: Request<{ id: string }>, res: Response) {
   try {
      const view = (await dbInstance.execute('getView', { id: req.params.id })).recordset[0] as View
      console.log(view);
      
      return res.status(200).json(view)
   } catch (error) {
      return res.status(500).json(error)
   }
}


//Function to delete a view
export async function deleteView(req: Request<{ id: string }>, res: Response) {
   try {
      //get view by Id
      const view = (await dbInstance.execute('getView', { id: req.params.id })).recordset[0] as View


      if (view && view.id) {
         await dbInstance.execute('deleteView', { id: req.params.id })
         return res.status(200).json({ message: "Deleted Successfully" })
      }else{
         return res.status(404).json({ message: "View not found" })
      }

      

   } catch (error) {
      return res.status(500).json(error)
   }
}