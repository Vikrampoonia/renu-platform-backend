import express from  'express';
import cors from 'cors';
import dotenv from "dotenv";
dotenv.config();


import {createSchool, getSchools} from './controller/school.js';
import { upload } from './middleware/upload.js';

const app = express();


const corsOptions = {
  origin: 'https://renu-platform-frontend.vercel.app'
};
app.use(cors(corsOptions)); 
app.use(express.json());



app.get('/', async(req, res) => {
    res.send('Server is running');
});


app.use("/schoolImages", express.static("schoolImages"));
app.get('/schools', getSchools);
app.post('/create', upload.single("image"),createSchool);


const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}/`);
});
