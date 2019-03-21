import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class AllLoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: Function) {
    console.log(`AllLoggerMiddleware ${req.method} ${req.originalUrl || req.url}`);
    next();
  }
}
