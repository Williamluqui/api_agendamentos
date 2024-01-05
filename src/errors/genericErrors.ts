import { Response, NextFunction } from 'express';
import { errorHandler } from './handleErrorApp';

export function errorApp(error: any, res: Response, next: NextFunction) {
    if (error instanceof errorHandler) {
        console.log(error);
        res.status(error.statusCode).json(error);
        next();
    } else {
        res.status(500).json(new errorHandler(500, 'Internal server Error'));
        console.log('Unexpected error', error);
        next();
    }
}
