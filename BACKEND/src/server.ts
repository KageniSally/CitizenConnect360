import express, { json } from 'express'
import authRoutes from './Routes/authRoutes'
import userRoutes from './Routes/userRoutes'
import viewRoutes from './Routes/viewRoutes'
import incidentsRoutes from './Routes/incidentsRoutes'

const app=express()

//middleware
app.use(json())


app.use('/users',authRoutes)
app.use('/users',userRoutes)
app.use('/views',viewRoutes)
app.use('/incidents',incidentsRoutes)



app.listen(1000,()=>{
    console.log("CitizenConnect360.......")
})


