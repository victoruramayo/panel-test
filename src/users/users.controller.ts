import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { RoleGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles';

@UseGuards(AuthGuard('jwt'), RoleGuard)
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
