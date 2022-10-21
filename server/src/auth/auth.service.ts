import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  signup() {
    return 'signup';
  }

  signin() {
    return 'signin';
  }
}
