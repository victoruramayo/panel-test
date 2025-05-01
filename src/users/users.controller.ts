import { Controller, Get, UseGuards } from '@nestjs/common';
import { RoleGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles';
import {JwtGuard} from "../auth/guards/jwt.guard";

@UseGuards(JwtGuard, RoleGuard)
@Controller('user')
export class UsersController {
  @Get('admin')
  @Roles('admin')
  getAdminStuff() {
    return 'solo admins 😎';
  }
    @Get()
    getUserStuff() {
        return 'todos 😎';
    }
}
