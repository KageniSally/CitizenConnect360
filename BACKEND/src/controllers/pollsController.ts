import { NextFunction, Request, Response } from 'express'
import { v4 as uid } from 'uuid'
import { DBHelper } from '../DBHelpers'
import { ExtendedRequest1 } from '../Middleware'
import { log } from 'console'
import { PollChoices, Polls } from '../Models/polls'


const dbInstance = new DBHelper


//Function to add a poll
export async function addPoll(req: ExtendedRequest1, res: Response, next: NextFunction) {
    try {
        const id = uid()
        const { question, choices } = req.body
        const createdBy = req.info?.sub
        // console.log(req.info?.sub);



        try {


            console.log(choices)
            if (choices.length) {
                dbInstance.execute('addPoll', { id, question, createdBy })

                for (let choice in choices) {
                    const choiceId = uid()
                    console.log(choices[choice]);
                    dbInstance.execute('addPollChoice', { id: choiceId, choice: choices[choice], pollId: id })
                }
                return res.status(201).json({ message: "Choice added successfully" })


            }
            return res.status(400).json({ message: "Add Choices please" })

        } catch (error) {
            return res.status(500).json(error)
        }



        return res.status(201).json({ message: "Poll Created Successfully" })
    } catch (error) {
        return res.status(500).json(error)




    }
}

// Function to get all polls
export async function getPolls(req: Request, res: Response) {
    try {
        // Get all polls
        const polls = (await dbInstance.execute('getPolls', {})).recordset as Polls[];
        // Get all choices
        const allChoices = (await dbInstance.execute('getChoices', {})).recordset as PollChoices[];

        // Check if polls exist
        if (polls.length) {
            const allPolls = polls.map(poll => {
                // Get choices for a specific poll
                const pollChoices = allChoices.filter(choice => choice.pollId === poll.id);
                // Construct the single poll object
                return {
                    ...poll,
                    choices: pollChoices
                };
            });

            // Return all polls with their choices
            return res.status(200).json(allPolls);
        }

        // Return if there are no polls
        return res.status(400).json({ message: "No polls yet!!!!" });
    } catch (error) {
        return res.status(500).json(error);
    }
}


//Function to add a vote
export async function addResponse(req:ExtendedRequest1,res:Response){
    try {

        const id=uid()
        const {pollId,pollChoiceId}=req.body
        const userId=req.info.sub
        dbInstance.execute('addResponses',{id,userId,pollId,pollChoiceId})
        return res.status(201).json({message:"Response added successfully"})
    } catch (error) {
        return res.status(500).json(error)
    }
}