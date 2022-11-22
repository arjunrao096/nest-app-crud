import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';
import {MongooseModule} from '@nestjs/mongoose';
import {User, UserSchema} from './schemas/users.schema';
import { UsersMiddleware } from './helpers/users.middleware';

@Module({
  imports: [MongooseModule.forFeature([{name:User.name, schema: UserSchema}])],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(UsersMiddleware)
    .forRoutes(UsersController)
  }
}
