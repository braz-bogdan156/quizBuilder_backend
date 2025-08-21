import express from 'express';
import * as dotenv from 'dotenv';
import { connectDB } from './config/db.ts'
import cors from 'cors';
import { routes } from './routes/index.ts'; 

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', routes);

app.get('/', (_req, res) => res.send('API Running'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));