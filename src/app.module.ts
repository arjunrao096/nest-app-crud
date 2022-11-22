import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {UsersModule} from './modules/users/users.module';
import {MongooseModule} from '@nestjs/mongoose';

@Module({
  imports: [UsersModule, MongooseModule.forRoot('mongodb+srv://testapp:VODPbUV88SmzwlrU@cluster0.l9te9ot.mongodb.net/nestjs')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

//VODPbUV88SmzwlrU

//mongodb+srv://testapp:<password>@cluster0.l9te9ot.mongodb.net/?retryWrites=true&w=majority
