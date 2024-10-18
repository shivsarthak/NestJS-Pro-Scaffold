import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export enum UserProperties {
  ID = 'userId',
  EMAIL = 'email',
}

export const User = createParamDecorator(
  (data: UserProperties, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const user = request.user as {
      userId: string;
      email: string;
    };
    return data ? user?.[data] : user;
  },
);
