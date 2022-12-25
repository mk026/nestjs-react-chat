import { Request } from 'express';

import { JwtStrategy } from '../jwt.strategy';

export interface AuthRequest extends Request {
  user: Awaited<ReturnType<JwtStrategy['validate']>>;
}
