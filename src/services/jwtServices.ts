import * as jwt from 'jsonwebtoken';
import { IAdmin } from '../controllers/admin/admin.interface';

const secretKey = process.env.SECRET_TOKEN!;


export function generateToken(user: IAdmin): string {
    const payload = { id: user.id, username: user.usuario, tipo: user.tipo };
    return jwt.sign(payload, secretKey, { expiresIn: '60s' });
}

export function verifyToken(token: string): Promise<IAdmin> {
    return new Promise((resolve, reject) => {
        jwt.verify(token, secretKey, (err, decoded) => {
            if (err) {
                reject(err);
            } else {
                resolve(decoded as IAdmin);
            }
        });
    });
}

