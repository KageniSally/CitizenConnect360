import express, { json } from 'express'
import authRoutes from './Routes/authRoutes'
import userRoutes from './Routes/userRoutes'

const app=express()

//middleware
app.use(json())


app.use('/users',authRoutes)
app.use('/user',userRoutes)



app.listen(1000,()=>{
    console.log("CitizenConnect360......")
})


