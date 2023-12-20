import 'dotenv/config';
import express from 'express';
import { router } from './router/routes';

const app = express();

const PORT = process.env.PORT;

app.use(express.json());

app.use('/api', router);

app.listen(PORT, () => {
    console.log(`Server is run http://localhost:${PORT}/`);
});
