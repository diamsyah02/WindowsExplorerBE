import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import rootRoutesV1 from './src/routes/v1/root.route.js';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

const corsOptions = {
    origin: 'http://localhost:5173', 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204
};

app.use(express.json());
app.use(cors(corsOptions));

app.use('/api/v1', rootRoutesV1);

const startServer = async () => {    
    app.listen(PORT, () => {
        console.log(`🚀 Server berjalan di http://localhost:${PORT}`);
    });
};

startServer();