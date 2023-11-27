import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { OrdersModule } from './orders/orders.module';
// import { RootMiddleware } from './root.middleware';


/***Module is annotation which decribe that the purpose of class , methods 
 * In nodejs we use the Modules import and export same thing we can use the @module Annotation .
 * it specify for the import of imports , controllers and providers.
*/

@Module({
  imports: [OrdersModule,UsersModule],
  controllers: [AppController],
  providers: [AppService],
})

export class RootModule{
  constructor(){
    console.log(" **** Please Test The Routes  **** ")
  }

}
