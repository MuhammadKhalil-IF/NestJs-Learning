import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { UserService ,User} from './users.service';

/***These are  also @annotations which tells that this class is controller class and the @order tells that this is use for the @order controllers
 *  @Post ,@Delete ,@Update and @Put these anotation tells that these are apis .
 *  as we know that in Node js we use app.post something like that .now this whole express app is merged in this controller annoation
 *  which help us to create apis without writing the log code we just use the annotations. 
  */

@Controller('users')    
export class UserController {
    /***initializing userService classs object in constructor  */
  constructor(private readonly userService: UserService) {}


  
  
  @Post('register')
  async register(@Body() userData: { username: string; password: string }){
    const { username, password } = userData;
    if (!username || !password) {
      return { message: 'Username and password are required' };
    }
    const newUser: User | null = this.userService.registerUser(username, password);
    if (!newUser) {
      return { message: 'Username already exists' };
    }
    return { message: 'User registered successfully', user: newUser };
  }



  @Post('login')
  async login(@Body() userData:{username: string,password: string}) {
    if (!userData.username || !userData.password) {
      return { message: 'Username and password are required' };
    }

    const user = this.userService.LoginUser(userData.username, userData.password);
    if (!user) {
      return { message: 'Invalid credentials' };
    }

    return { message: 'Login successful', user };
  }  



}
