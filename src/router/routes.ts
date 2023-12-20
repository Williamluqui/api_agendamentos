import { Router } from 'express';
import { UserController } from '../controllers/user/UserController';
export const router = Router();

const userController = new UserController();

router.get('/login',userController.userRegister);
