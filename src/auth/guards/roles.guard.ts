import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { Roles } from '../../users/entities/User';
import { ROLE_KEY } from '../decorators/roles';

export class TokenDto {
  id: number;
  role: Roles;
}

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const requiredRoles = this.reflector.getAllAndOverride<Roles[]>(ROLE_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    const request = context.switchToHttp().getRequest();
    const role: Roles | undefined = request.user?.role;

    if (!requiredRoles || requiredRoles.some((r) => r === role)) {
      return true;
    }

    throw new ForbiddenException('No tienes los roles necesarios');
  }
}
