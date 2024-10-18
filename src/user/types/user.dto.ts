export class CreateGoogleUserDto {
  email: string;
  firstName: string;
  lastName: string;
  avatarUrl?: string;
}

export class UserResponseDto {
  id: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string;
  lastName?: string | null;
  avatarUrl?: string | null;
}
