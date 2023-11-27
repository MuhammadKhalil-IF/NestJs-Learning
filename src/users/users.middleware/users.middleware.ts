import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';


@Injectable()
export class UsersMiddleware implements NestMiddleware {

/** MIDDLEWARE: Display the Request params in the Console **/
use(req: Request, res: Response, next: NextFunction) {
  console.log(`Incoming request: ${req.method} ${req.url}`);
  next();
}



}