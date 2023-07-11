import express from 'express'
import { PrismaClient } from '@prisma/client'
import cors from 'cors'
import { authRoute } from './auth/index.js';
import cookieParser from 'cookie-parser';

const app = express();

// Cors configuration
app.use(cors({
    origin: process.env.CLIENT_URL,
    methods:"GET,POST,PUT,DELETE",
    credentials:true
}))

// Middleware
app.use(express.json());
app.use(cookieParser())

app.use('/', authRoute)

app.listen(5000, () => {
    console.log('Server Running on Port 5000')
})