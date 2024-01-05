import bcrypt from 'bcryptjs';
import { prisma } from '../../database/database';
import { errorHandler } from '../../errors/handleErrorApp';


export async function CreateAdminModelSession(password: string) {
    const user: string = 'SuperAdmin';

    const saltHash: number = 12;
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

export async function findAll(username: string) {
    const findUser = await prisma.admin.findFirst({
        where: {
            usuario: username,
        }
        
    });

    if (!findUser) {
        throw new errorHandler(401, 'Senha ou usuario inválido, tente novamente!');
    }
    return findUser;
}

export async function LoginModelSessionAdmin(username: string, password: string) {
    const user = await findAll(username);

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
        throw new errorHandler(401, 'Senha ou usuario inválido, tente novamente!');
    }
}
