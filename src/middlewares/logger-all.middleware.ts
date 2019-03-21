import { Injectable, NestMiddleware, MiddlewareFunction } from '@nestjs/common';
import express = require('express');

@Injectable()
export class AllLoggerMiddleware implements NestMiddleware {
  resolve(): MiddlewareFunction<express.Request, express.Response> {
    return (req, res, next) => {
      console.log(`AllLoggerMiddleware ${req.method} ${req.path}`);
      next();
    };
  }
}
