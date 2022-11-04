import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatalogueItemEntity } from './entities/catalogueItem.entity';
import { CartLineEntity } from './entities/cartLine.entity';
import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';
import { CartModule } from './cart/cart.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'maplrdb',
      entities: [CatalogueItemEntity, CartLineEntity],
      autoLoadEntities: true,
      synchronize: true,
      dropSchema: false,
    }),
    ProductModule,
    OrderModule,
    CartModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
