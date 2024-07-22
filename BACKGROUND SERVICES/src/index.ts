import express from 'express'
import { run } from './EmailService'
import cron from 'node-cron'

const app=express()


cron.schedule('*/10* * * * *', async () => {
    await run()
})

app.listen(2000,()=>{
    console.log("CitizenConnect360 Background.......")
})