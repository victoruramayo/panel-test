import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import {UserLoginDto} from "./dto/logint.dto";

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('login')
    login(@Body() login:UserLoginDto) {
        return this.authService.login(login.username, login.password);
    }
}
