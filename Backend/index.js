import express from 'express';
import {PORT,MONGO_DB_URL} from './config.js';
import mongoose from 'mongoose';
import {Book} from './models/bookmodel.js';
import booksRoutes from './routes/booksRoutes.js';
import cors from 'cors';
const app=express();

app.use(express.json());

/*app.use(
    cors({
        origin:'http://localhost:3000',
        methods:['GET','POST','PUT','DELETE'],
        allowedHeaders:['Content-Type'],
    })
);*/

app.use(cors());

app.get('/',(request,response)=>{
    return response.status(234).send('Hello World');
})

app.use('/books',booksRoutes);

mongoose.connect(MONGO_DB_URL)
.then(()=>{
    console.log('Connected to MongoDB');
    app.listen(PORT,()=>{
        console.log(`App is listening on port ${PORT}`);
    });
})
.catch((error)=>{
console.log(error);
})
