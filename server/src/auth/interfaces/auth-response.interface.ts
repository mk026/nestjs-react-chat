import { User } from '../../user/user.entity';

export interface AuthResponse {
  user: Pick<User, 'name' | 'email'>;
  token: string;
}
