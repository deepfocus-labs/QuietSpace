import dotenv from 'dotenv';
import express from 'express'
import router from './Routes/auth.routes.js';
import cors from 'cors';
import userRouter from './Routes/auth.routes.js';

const app = express();

app.use(cors({
    origin: 'http://localhost:5173', 
    credentials: true   
}));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/',router);

const port = process.env.PORT || 3000;

// app.get('/api/message', (req,res) => {
//     const data = [
//         {
//             id: 1,
//             job: "project"
//         }
//     ];
//     res.send(data);
// })


export {app};
