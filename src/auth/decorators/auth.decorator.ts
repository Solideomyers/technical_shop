import { AuthGuard } from '@nestjs/passport';
import { ValidRoles } from '../interfaces';
import { RoleProtected } from './role-protected/role-protected.decorator';
import { UserRoleGuard } from '../guards/user-role/user-role.guard';
import { applyDecorators, UseGuards } from '@nestjs/common';

export function Auth(...roles: ValidRoles[]) {
  return applyDecorators(
    RoleProtected(...roles),

    UseGuards(AuthGuard(), UserRoleGuard),
  );
}
