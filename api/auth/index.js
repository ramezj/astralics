import express from 'express';
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt';
import { prisma } from '../lib/db.js'
const router = express.Router();

router.get('/jwt', async(req, res) => {
    const token = req.cookies.auth;
    if(!token) {
        return res.status(401).json({
            response:'Unauthorized',
            ok:false
        })
    }
    const decode = await jwt.verify(token, process.env.JWT_SECRET);
    if(!decode) {
        return res.status(401).json({
            response:'Unauthorized',
            ok:false
        })
    }
    return res.status(200).json({
        response:decode,
        ok:true
    })
})

router.post('/register', async (req, res) => {
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
    return res.cookie('auth', token, {
        httpOnly: true,
        secure:true
    }).status(200).json({
        ok:true,
        response:'Signed Up Successfully'
    })
})

router.post('/login', async (req, res) => {
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
    const token = await jwt.sign({
        id:user.id
    }, process.env.JWT_SECRET)
    return res.cookie('auth', token, {
        httpOnly:true,
        secure:true
    }).status(200).json({
        ok:true,
        response:'Logged In Successfully'
    })
})

export { router as authRoute }