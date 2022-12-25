import * as bcryptjs from 'bcryptjs';

export class Hash {
  static generateHash(plainText: string) {
    return bcryptjs.hashSync(plainText);
  }

  static compare(plainText: string, hash: string) {
    return bcryptjs.compareSync(plainText, hash);
  }
}
