import { AdminModel } from '../../models/admin/AdminModel';
import { IAdmin } from './admin.interface';
import { Response, Request, NextFunction } from 'express';

//import { ErrorHandler } from '../../middleware/errorApplication';

export class AdminController {
    async adminRegister(req: Request, res: Response, next: NextFunction) {
        const { password } = req.body;

        try {
            if (!password || typeof password !== 'string') {
                res.status(400).json('Password is required or inválid !');
                return;
            }

            const admin = new AdminModel();
            await admin.adminModelSession(password);

            res.status(201).json('Admin register on database !');
        } catch (error) {
            res.status(500).json({
                message: 'An internal server error occurred',
            });
            next(error);
        }
    }

    async adminLogin(req: Request, res: Response, next: NextFunction) {
        const { username, password } = req.body as Partial<IAdmin>;
        try {
            if (
                !username ||
                !password ||
                typeof username !== 'string' ||
                typeof password !== 'string'
            ) {
                res.status(400).json('Invalid Username or password');
                return;
                // throw new ErrorHandler(400, 'Invalid Username or password');
            }

            const loginAdmin = new AdminModel().loginModelSessionAdmin;
            await loginAdmin(username, password);
            
           
            res.status(200).json({ message: ' Login succesfull ' });
        } catch (error) {
            next(error);
        }
    }
}
