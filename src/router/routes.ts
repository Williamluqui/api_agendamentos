import { Router } from 'express';
import { UserController } from '../controllers/user/UserController';
import { AdminController } from '../controllers/admin/adminController';


export const router = Router();

const userController = new UserController();
const adminController = new AdminController();


// Register Admin @Strict comment line after register
router.post('/register-admin', adminController.adminRegister);
router.get('/login-admin',adminController.adminLogin);

// Router register User and Cabelereiro
router.post('/login', userController.userRegister);
