import { Injectable } from '@nestjs/common';


/***when we use injectable it mean two component are communicating with each others like RootMiddleware communicate with the NestMiddleware
 *  We can call it Dependency injector
 */

@Injectable()
export class OrderService {   


    AddOrder(): string{
        return "this will Add order"
      }

      DeleteOrder(): string{
        return "this will Delete order"
      }

      UpdateOrder(): string{
        return "this will Update order"
      } 

      FindOrder(): string{
        return "this will Find order"
      }
      
}

