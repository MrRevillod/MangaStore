import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import { apiRoutes } from './routes/apiRoutes.js';

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

app.use('/api', apiRoutes);

app.use((req, res, next) => {
    res.status(404).json({ message: "Not found" })
});

app.listen(3000, () => {
    console.log("Server started on port 3000");
});