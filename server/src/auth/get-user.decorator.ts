import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const GetUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): number => {
    const req = ctx.switchToHttp().getRequest();
    return req.user;
  },
);
