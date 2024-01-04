import { NextFunction, Request, Response } from 'express';

class errorHandler extends Error {
    public statusCode: number;
    public message: string;

    constructor(statusCode: number, message: string) {
        super();
        this.statusCode = statusCode || 500;
        this.message = message ;
    }
}

const handleError = (
    err: errorHandler,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const status = 'Error';
    const statusCode = err.statusCode;
    const message = err.message ? err.message : 'Internal server error';
    if (statusCode === 500) {
        res.json({
            error: {
                statusCode,
                message: 'Internal server error',
            },
        });
    }
    res.status(statusCode).json({
        status,
        statusCode,
        message,
    });
    next(err);
};

export { errorHandler, handleError };
