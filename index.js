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
app.use(cors());

connectDB();

app.use('/user', userRoutes);
app.use('/tasks',taskRoutes);

export const handler = serverless(app);