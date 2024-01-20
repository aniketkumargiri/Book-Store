import express from "express";
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from "cookie-parser";
import "./db.js";
import { AdminRouter } from './routes/auth.js'
import { StudentRouter } from "./routes/student.js";
import { BookRouter } from "./routes/book.js";
import { Admin } from "./models/Admin.js";
import { Student } from "./models/Student.js";
import { Book } from "./models/Book.js";

const app = express();
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

app.use(cookieParser());
dotenv.config();
app.use('/auth', AdminRouter);
app.use('/student', StudentRouter);
app.use('/book', BookRouter);

app.get('/dashboard', async (req, res) => {
    try {
        const admin = await Admin.countDocuments();
        const student = await Student.countDocuments();
        const book = await Book.countDocuments();
        return res.json({ ok: true, admin, student, book });
    } catch (err) {
        return res.json(err);
    }
})

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
});
