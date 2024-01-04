import bcrypt from 'bcryptjs';
import { prisma } from '../../database/database';
import { errorHandler } from '../../middleware/handleErrorApp';

export class AdminModel {
    public async CreateAdminModelSession(password: string) {
        const user: string = 'SuperAdmin';

        const saltHash: number = 10;
        const hash = await bcrypt.hash(password, saltHash);

        const checkUser = await prisma.admin.findFirst();

        if (checkUser) throw new errorHandler(401, 'Você não está autorizado!');

        if (user) {
            await prisma.admin.create({
                data: {
                    usuario: user,
                    password: hash,
                },
            });
        }
    }

    public async LoginModelSessionAdmin(username: string, password: string) {
        const findUser = await prisma.admin.findFirst({
            where: {
                usuario: username,
            },
        });

        if (!findUser) {
            throw new errorHandler(
                401,
                'Usuário ou senha inválido tente novamente !'
            );
        }

        const validPassword = await bcrypt.compare(password, findUser.password);

        if (!validPassword) {
            throw new errorHandler(
                401,
                'Credenciais inválidas. Tente novamente!'
            );
        }

        return validPassword;
    }
}
