import { Response, Request } from 'express';

export class UserController {
    public async userRegister(req: Request, res: Response) {
        res.json({ message: 'ok' });
    }
}
