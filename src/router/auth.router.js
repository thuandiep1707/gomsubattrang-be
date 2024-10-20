import express from "express";

import { login, register } from "../controllers/auth.controller.js";
import { hashPassword, comparePassword } from "../middlewares/auth.middleware.js";

const auth = express.Router();

auth.post('/login', comparePassword, login ,(req, res, next) =>{
    const result = req.data
    res.json(result)
})

auth.post('/register', hashPassword, register, (req, res) => {
    const body = req.body
    console.log(body)
    res.json({auth: true});
});

export default auth