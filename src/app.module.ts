import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { BooksModule } from './books/books.module';
import { UsersModule } from './users/users.module';
import { config } from 'dotenv'; 

config(); //variables de entorno

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URI), //base de datos MongoDB
    AuthModule,
    BooksModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
