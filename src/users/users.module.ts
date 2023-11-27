import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { UserController } from './users.controller';
import { UserService } from './users.service';
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
   * */
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(UsersMiddleware).forRoutes({ path: '/users/*', method: RequestMethod.POST });
  }
   
}
