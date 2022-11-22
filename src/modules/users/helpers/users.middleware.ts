import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction} from 'express';
@Injectable()
export class UsersMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(`You are on path: ${req.path} with ${req.method} request`);
    next();
  }
}
