import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class UserModel {
    public async createUserAdmin(usuario: string, password: string) {
        await prisma.admin.create({
            data: {
                usuario: usuario,
                password: password,
            },
        });
    }
}
