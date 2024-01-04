import { AdminModel } from '../../models/admin/AdminModel';
import { IAdmin } from './admin.interface';
import { Response, Request, NextFunction } from 'express';
import { errorApp } from '../../middleware/genericErrors';


export class AdminController {
    async adminRegister(req: Request, res: Response, next: NextFunction) {
        const { password } = req.body;

        try {
            if (!password || typeof password !== 'string') {
                res.status(400).json('Insira um password válido!');
                return;
            }

            const adminModel = new AdminModel();

            await adminModel.CreateAdminModelSession(password);

            res.status(201).json({
                data: {
                    message: 'Registrado com sucesso!',
                },
            });

        } catch (error) {
            errorApp(error, res, next);
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
                res.status(400).json('Nome de usuário e senha são necessários');
                return;
            }

            const loginAdmin = new AdminModel().LoginModelSessionAdmin;
            await loginAdmin(username, password);

            

            res.status(200).json({
                data: {
                    message: 'Sucesso!',
                    token: 'teste',
                },
            });
        } catch (error) {
            errorApp(error, res, next);
        }
    }
}
