import express from 'express'
import { PrismaClient } from '@prisma/client'
import cors from 'cors'
import { authRoute } from './auth/index.js';

const app = express();

// Cors configuration
app.use(cors({
    origin:process.env.CLIENT_ORIGIN,
    methods:['GET', 'POST']
}));
// Middleware
app.use(express.json());

app.use('/', authRoute)

app.listen(5000, () => {
    console.log('Server Running on Port 5000')
})