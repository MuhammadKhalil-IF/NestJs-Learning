import { Controller, Delete, Get, Post, Put} from '@nestjs/common';
import { OrderService } from './orders.service';


/***These are  also @annotations which tells that this class is controller class and the @order tells that this is use for the @order controllers
 *  @Post ,@Delete ,@Update and @Put these anotation tells that these are apis .
 *  as we know that in Node js we use app.post something like that .now this whole express app is merged in this controller annoation
 *  which help us to create apis without writing the log code we just use the annotations. 
  */

@Controller('order')
export class OrderController {
  // public orderService:OrderService = new OrderService();
  constructor(private orderService:OrderService) {}
// add Order 
@Post('/AddOrder')
AddOrder(): string{
  return this.orderService.AddOrder();
}

// delete Order 
@Delete('/DeleteOrder')
DeleteOrder(): string{
  return this.orderService.DeleteOrder();
}

// update Order
@Put('/UpdateOrder') 
UpdateOrder(): string{
  return this.orderService.UpdateOrder();
 
} 

// find Order
@Get('/FindOrders')
FindOrder(): string{
  return this.orderService.FindOrder();
  
}


}


