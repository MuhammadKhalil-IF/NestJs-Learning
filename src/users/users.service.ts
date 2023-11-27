import { Injectable } from '@nestjs/common';


/***when we use injectable it mean two component are communicating with each others like RootMiddleware communicate with the NestMiddleware
 *  We can call it Dependency injector
 */

export interface User {
  username: string;
  password: string;
}

@Injectable()
export class UserService {   

    private users: User[] = [];
  
    
    registerUser(username: string, password: string): User | null {
      const existingUser = this.users.find(user => user.username === username);
      if (existingUser) {
        return null;
      }
      const newUser: User = {
        username,
        password,
      };
      this.users.push(newUser);
      return newUser;
    }
    
    LoginUser(username: string, password: string): User | null {
      const user = this.users.find(user => user.username === username && user.password === password);
      if (user) {
        return user; 
        }
        return null;
      }





      
}
