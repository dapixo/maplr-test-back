import { Body, Controller, NotFoundException, Post } from '@nestjs/common';
import { OrderService } from './order.service';
import { orderLineDto } from './orderLineDto';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  validateOrder(@Body() orderlineDtoArray: orderLineDto[]) {
    try {
      return this.orderService.validate(orderlineDtoArray);
    } catch (error) {
      throw new NotFoundException();
    }
  }
}
