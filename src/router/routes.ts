import { Router } from 'express';
import { UserController } from '../controllers/user/UserController';
import { AdminController } from '../controllers/admin/adminController';
import 'express-async-errors';

export const router = Router();

// Admin Router
const userController = new UserController();
const adminController = new AdminController();


// Register Admin. @Strict comment line after register
router.post('/register-admin', adminController.adminRegister);
router.get('/login-admin',adminController.adminLogin);

// Router register User and Cabelereiro
router.post('/login', userController.userRegister);
