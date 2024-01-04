import { Response, Request } from 'express';


export class UserController {

    public async userRegister(req: Request, res: Response) {

        
        
       
    
    
        // const user = new UserModel();
        // const response = await user.createUserAdmin('admin', 'teste123');

        res.json({ message: 'ok' });
    }
}
