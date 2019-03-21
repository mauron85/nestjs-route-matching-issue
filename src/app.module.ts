import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GetLoggerMiddleware } from './middlewares/logger-get.middleware.1';
import { AllLoggerMiddleware } from './middlewares/logger-all.middleware';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(GetLoggerMiddleware)
      .forRoutes(
        { path: '/hello', method: RequestMethod.GET },
      );

    consumer
      .apply(AllLoggerMiddleware)
      .forRoutes(
        { path: '/hello', method: RequestMethod.ALL },
      );
  }
}
