import 'dotenv/config';
import express from 'express';
import { router } from './router/routes';
import { handleError } from './middleware/errorApplication';

const app = express();

const PORT = process.env.PORT;

app.use(express.json());

app.use('/api', router);

app.listen(PORT, () => {
    console.log(`Server is run http://localhost:${PORT}/`);
});

// Middleware throw Error
app.use(handleError);