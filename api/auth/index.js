import express from 'express';
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client'
const router = express.Router();

router.post('/register', async (req, res) => {
    const prisma = new PrismaClient();
    const { email, password } = req.body;
    if(!email || !password ) {
        return res.status(400).json({
            ok:false,
            response:'Email or Password Missing'
        })
    }
    const exist = await prisma.user.findFirst({
        where: {
            email: email
        }
    })
    if(exist) {
        return res.status(400).json({
            ok:false,
            response:'Email already in use'
        })
    }
    const hashed = await bcrypt.hash(password, 8);
    const user = await prisma.user.create({
        data: {
            email:email,
            password:hashed
        }
    });
    if(!user) {
        return res.status(400).json({
            ok:false,
            response:' Something went wrong.. '
        })
    }
    const token = await jwt.sign({
        id:user.id
    }, process.env.JWT_SECRET)
    return res.status(200).json({
        ok:true,
        response:user,
        token
    })
})

router.post('/login', async (req, res) => {
    const prisma = new PrismaClient();
    const { email, password } = req.body;
    if(!email || !password ) {
        return res.status(400).json({
            ok:false,
            response:'Email or Password Missing'
        })
    }
    const user = await prisma.user.findFirst({
        where: {
            email: email
        }
    })
    if(!user) {
        return res.status(400).json({
            ok:false,
            response:' User does not exist '
        })
    }
    const compared = await bcrypt.compare(req.body.password, user.password);
    if(!compared) {
        return res.status(400).json({
            ok:false,
            response:' Incorrect Email or Password '
        })
    }
    return res.status(200).json({
        ok:true,
        response:user
    })
})

export { router as authRoute }