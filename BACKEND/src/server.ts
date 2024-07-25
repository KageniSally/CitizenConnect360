import express, { json } from 'express'
import authRoutes from './Routes/authRoutes'
import userRoutes from './Routes/userRoutes'
import viewRoutes from './Routes/viewRoutes'
import incidentsRoutes from './Routes/incidentsRoutes'
import pollRoutes from './Routes/pollRoutes'
import cors from "cors"

const app=express()


//Connection of different ports
app.use(cors())



//middleware
app.use(json())

app.use('/users',authRoutes)
app.use('/users',userRoutes)
app.use('/views',viewRoutes)
app.use('/incidents',incidentsRoutes)
app.use('/polls',pollRoutes)



app.listen(1000,()=>{
    console.log("CitizenConnect360................")
})


