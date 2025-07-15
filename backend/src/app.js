import dotenv from 'dotenv';
import express from 'express'

const app = express();

const port = process.env.PORT || 3000;

app.get('/api/message', (req,res) => {
    const data = [
        {
            id: 1,
            job: "project"
        }
    ];
    res.send(data);
})

app.listen(port, () => {
    console.log(`server is listening on port : ${port}`);
})
