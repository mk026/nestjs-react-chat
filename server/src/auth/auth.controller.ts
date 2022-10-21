import { Controller, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Post('/signup')
  signup() {
    return 'signup';
  }

  @Post('/signin')
  signin() {
    return 'signin';
  }
}
