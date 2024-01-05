import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../services/jwtServices';
// import { errorApp } from '../errors/genericErrors';

export async function verifiTokenJwt(req: Request, res: Response, next: NextFunction) {
    try {
        const authHeader: string | undefined = req.headers['authorization'];
        const token = authHeader?.split(' ')[1];

        if (!authHeader && !token) {
            return res.status(401).json({ message: 'Insira um token válido!' });
        }

        await verifyToken(token!);

        next();
    } catch (error) {
        console.log(`[ERRO] ${error}`);
        res.status(400).json({ message: 'Token inválido ou expirado,tente novamente!' });
    }
}
