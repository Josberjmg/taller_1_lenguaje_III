import { Module } from '@nestjs/common';
import { ProductModule } from './products/product.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env.development`,
      isGlobal: true,
    }), 
    ProductModule
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
