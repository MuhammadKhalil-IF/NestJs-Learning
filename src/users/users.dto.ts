import { IsNotEmpty, ValidatorOptions } from "class-validator"


export class UserDto{
    @IsNotEmpty({message: "Must add username and Password"})
    username:string
    password:string 
}