import {
    CreateAdminModelSession,
    LoginModelSessionAdmin,
    findAll,
} from '../../models/admin/AdminModel';

import { IAdmin } from './admin.interface';
import { Response, Request, NextFunction } from 'express';
import { errorApp } from '../../errors/genericErrors';
import { generateToken } from '../../services/jwtServices';

export class AdminController {
    async adminRegister(req: Request, res: Response, next: NextFunction) {
        const { password } = req.body;

        try {
            if (!password || typeof password !== 'string') {
                res.status(400).json({message:'Insira um password válido!'});
                return;
            }

            await CreateAdminModelSession(password);

            res.status(201).json({
                data: {
                    message: 'Registrado com sucesso!',
                },
            });
        } catch (error) {
            console.log(`[ERRO] ${error}`);
            errorApp(error, res, next);
        }
    }

    async adminLogin(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { username, password } = req.body;
            if (
                !username ||
                !password ||
                typeof username !== 'string' ||
                typeof password !== 'string'
            ) {
                res.status(400).json({
                    message: 'Nome de usuário e senha são necessários',
                });
                return;
            }

            await LoginModelSessionAdmin(username, password);

            const user: IAdmin = await findAll(username);

            const jwtToken = generateToken(user);

            res.status(200).json({
                data: {
                    message: 'Sucesso!',
                    jwtToken,
                },
            });
        } catch (error) {
            console.log(`[ERRO] ${error}`);
            errorApp(error, res, next);
        }
    }

    async adminPanel(req: Request, res: Response): Promise<void> {
        res.json({ msg: 'logged' });
    }
}

// registrar um admin x

// logar o admin e passar o token de sessão x
