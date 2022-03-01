import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TweetsModule } from './tweets/tweets.module';

//Tudo é Module no nestjs
//ES7 Decorators (Service, Module, Controller)
@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://root:root@db/analytics?authSource=admin',
      { useNewUrlParser: true },
    ),
    TweetsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
