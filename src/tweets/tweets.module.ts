import { Module } from '@nestjs/common';
import { Tweet, TweetSchema } from './schemas/tweet.schema';
import { TweetsService } from './tweets.service';
import { TweetsController } from './tweets.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CheckNewTweetsService } from './check-new-tweets/check-new-tweets.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Tweet.name, schema: TweetSchema }]),
  ],
  controllers: [TweetsController],
  providers: [TweetsService, CheckNewTweetsService],
})
export class TweetsModule {}
