import express from 'express';
import connectDB from './config/db.js';
import cors  from 'cors';
import 'dotenv/config';
import  userRoutes from './routes/auth.js';
import   taskRoutes from './routes/taskRoutes.js';
import serverless from 'serverless-http';

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const corsOptions = {
    origin: 'http://localhost:3000', // Allow localhost:3000 requests
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  };
  
app.use(cors(corsOptions));
  

connectDB();

app.use('/user', userRoutes);
app.use('/tasks',taskRoutes);

app.listen(5000,  () => {
    console.log('server is running on http://localhost:5000');
})

export default app;