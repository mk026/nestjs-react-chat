import { createParamDecorator, ExecutionContext } from '@nestjs/common';

import { AuthRequest } from '../../auth/interfaces/auth-request.interface';

export const AuthUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const req = ctx.switchToHttp().getRequest<AuthRequest>();
    return req.user;
  },
);
