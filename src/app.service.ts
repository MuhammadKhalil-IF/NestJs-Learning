import { Injectable } from '@nestjs/common';



/***when we use injectable it mean two component are communicating with each others like RootMiddleware communicate with the NestMiddleware
 *  We can call it Dependency injector
 */

@Injectable()
export class AppService {
  Welcome(): string {
    return 'Welcome To My Nest Js Series';
  }
}
