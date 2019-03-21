import { Injectable, NestMiddleware, MiddlewareFunction } from '@nestjs/common';
import express = require('express');

@Injectable()
export class GetLoggerMiddleware implements NestMiddleware {
  resolve(): MiddlewareFunction<express.Request, express.Response> {
    return (req, res, next) => {
      console.log(`GetLoggerMiddleware: ${req.method} ${req.path}`);
      next();
    };
  }
}
