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

// CORS setup: Allow requests from localhost:3000
const corsOptions = {
    origin: 'https://task-manage-react.vercel.app', // Allow localhost:3000 requests
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  };
  
  // Use CORS middleware first
  app.use('*',cors(corsOptions));
  

connectDB();

app.use('/user', userRoutes);
app.use('/tasks',taskRoutes);

app.listen(5000,  () => {
    console.log('server is running on http://localhost:5000');
})

export default app;