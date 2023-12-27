import bcrypt from 'bcryptjs';
import { PrismaClient } from '@prisma/client';
import { ErrorHandler } from '../../middleware/errorApplication';

export class AdminModel {
    public async adminModelSession(password: string) {
        const prisma = new PrismaClient();

        const saltHash: number = 10;
        const hash = await bcrypt.hash(password, saltHash);

        const registerAdmin = await prisma.admin.create({
            data: {
                usuario: 'SuperAdmin',
                password: hash,
            },
        });

        return registerAdmin;
    }
    public async loginModelSessionAdmin(username: string, password: string) {
        const prisma = new PrismaClient();

        const findUser = await prisma.admin.findFirst({
            where: {
                usuario: username,
            },
        });

        if (!findUser) {
            throw new ErrorHandler(
                401,
                'Usuário ou senha inválido tente novamente !'
            );
        }

        const validPassword = await bcrypt.compare(password, findUser.password);
        if (!validPassword)
            throw new ErrorHandler(401, 'Usuário ou senha inválido!');

        return findUser;
    }
}
