import express from 'express';
import sequelize from './models/sequelize';
import cors from 'cors';
import { userRouter } from './routes/User'


const app = express();
app.use(express.json());
app.use(cors());

sequelize.sync({ force: false }) // Set force:true to drop and re-create tables on every app start
  .then(() => {
    console.log('All models were synchronized successfully.');
  })
  .catch((error) => {
    console.error('Error synchronizing models:', error);
  });

app.use('/user', userRouter);

const port = 3001;


app.listen(port, ()=> console.log(`Server is running on ${port}`))
