How to Define the Middleware 

********** CREATE FILE NAME MIDDLEWARE ***********

import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
@Injectable()
export class RootMiddleware implements NestMiddleware {

 use(req: Request, res: Response, next: NextFunction) {

   if (!req.url.startsWith('/order/')) {
       return res.status(404).json({ error: 'Please Access the Correct Route' , status:res.status(404)});
      }

   else{
        next();    
   }
     } 
   }

********** How to Comsume MiddleWare because (There is no place for middleware in the @Module() decorator) ***********
>>> this is way how to consume the Middleware in any Module class.

import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { UsersMiddleware } from './users.middleware/users.middleware';

@Module({
    imports: [],
    controllers: [UserController],
    providers: [UserService],
  })
export class UsersModule {
    constructor(){}

  /** 
   * Consume the First Middleware in all routes this is common for Route 
   **/
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(UsersMiddleware).forRoutes({ path: '/users/*', method: RequestMethod.POST });
  }
   
}