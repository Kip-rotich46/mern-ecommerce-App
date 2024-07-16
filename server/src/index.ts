import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { userRouter } from './routes/User'


const app = express();
app.use(express.json());
app.use(cors());

app.use('/user', userRouter);

mongoose.connect(
    "mongodb+srv://protio:protio@ecommerce.unjlaet.mongodb.net/"
);

const port = 3001;


app.listen(port, ()=> console.log(`Server is running on ${port}`))
