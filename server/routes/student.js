import express from 'express';
import { Student } from '../models/Student.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { verifyAdmin } from './auth.js';

// router
const router = express.Router();

router.post('/register', verifyAdmin, async (req, res) => {
    try {
        const { roll, username, password, grade } = req.body;
        const student = await Student.findOne({ username })
        if (student) {
            return res.json({ message: "Student is already registered" });
        }

        const hashPassword = await bcrypt.hash(password, 10);
        const newStudent = new Student({
            username,
            password: hashPassword,
            roll: roll,
            grade
        });
        await newStudent.save();
        return res.json({ registered: true })
    } catch (err) {
        return res.json({ message: "Student Registration Failed" });
    }
});

export { router as StudentRouter }