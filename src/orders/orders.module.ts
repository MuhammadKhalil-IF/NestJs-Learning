import { Module } from '@nestjs/common';
import { OrderService } from './orders.service';

import { OrderController } from './orders.controller';

@Module({
  imports: [],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrdersModule {
  constructor(){}
}
