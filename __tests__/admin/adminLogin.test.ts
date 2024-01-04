import request from 'supertest';
import { router } from '../../src/router/routes';

const app = router;

describe('GET /api/login-admin', () => {
    it('should respond with a message', async () => {
        const res = await request(app).get('/api/login-admin');

        // Aqui você pode fazer asserções sobre a resposta
        expect(res.status).toEqual(200);
        expect(res.body).toHaveProperty('message');
    });
});
