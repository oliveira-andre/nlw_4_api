import 'reflect-metadata';
import createConnection from './database';
import { router } from "./routes";

createConnection();
import express from 'express';

const app = express();

app.use(express.json());
app.use(router);

export { app };
