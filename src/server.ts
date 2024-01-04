import 'dotenv/config';
import 'express-async-errors';
import express from 'express';
import cors from 'cors';
import { router } from './router/routes';
import { handleError } from './middleware/handleErrorApp';
//import errorHandlerPrisma from './middleware/errorPrisma';

const app = express();

const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api', router);

// Middleware throw Error
app.use(handleError);

app.listen(PORT, () => {
    console.log(`Server is run http://localhost:${PORT}/`);
});
