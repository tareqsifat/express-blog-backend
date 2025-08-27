import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { User, UserSchema } from './users/schemas/user/user';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/blog_learn_project'),
    UsersModule,
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
