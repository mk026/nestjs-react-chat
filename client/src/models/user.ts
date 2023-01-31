export interface IUser {
  id: number;
  name: string;
  bio?: string;
  email: string;
  avatarUrl: string;
}

export interface UpdateUserDto {
  name?: string;
  bio?: string;
  email?: string;
}

export interface UpdatePasswordDto {
  oldPassword: string;
  password: string;
  confirmPassword: string;
}
