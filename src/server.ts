import express from 'express';
import routes from './routes/route';
import './database/prisma'
require('dotenv').config();

const port = process.env.PORT;

const app = express();

app.use(express.json());
app.use(routes);

app.listen(port, () => console.log("🖥️  Server is running!"))