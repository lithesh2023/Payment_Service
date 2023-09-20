import {
createParamDecorator,
ExecutionContext
} from '@nestjs/common';
import { CommonUtil } from '../util/common.util';

export const CurrentUser = createParamDecorator((data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const userToken = request.headers['authorization'];
    const userInfo = CommonUtil.getUserInfo(userToken);
    return userInfo ?? null;
});