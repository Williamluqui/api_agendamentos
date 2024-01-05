import { Router } from 'express';
import { UserController } from '../controllers/user/UserController';
import { AdminController } from '../controllers/admin/adminController';
import { verifiTokenJwt } from '../middleware/authToken';

import 'express-async-errors';

export const router = Router();



// Admin Router
const userController = new UserController();
const adminController = new AdminController();


// Register Admin. @Strict comment line after register
router.post('/auth/register-admin', adminController.adminRegister);
router.get('/auth/login-admin',adminController.adminLogin);
router.get('/panel/admin',verifiTokenJwt,adminController.adminPanel);

// Router register User and Cabelereiro
router.post('/auth/login', userController.userRegister);
