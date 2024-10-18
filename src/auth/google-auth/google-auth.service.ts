import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { AuthResponseDto, GoogleUserDto } from '../types/auth.dto';
import { Request } from 'express';
import { AuthService } from '../auth.service';

@Injectable()
export class GoogleAuthService {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  async validateGoogleUser(user: GoogleUserDto) {
    const email = user.emails.at(0)?.value;
    if (!email) {
      throw new UnauthorizedException('No email found');
    }
    const existingUser = await this.userService.getUserByEmail(email);
    if (existingUser) {
      return existingUser;
    }
    return this.userService.createGoogleUser({
      email,
      firstName: user.name.givenName,
      lastName: user.name.familyName,
      avatarUrl: user.photos.at(0)?.value,
    });
  }

  googleLogin(req: Request): AuthResponseDto {
    if (!req.user) {
      throw new UnauthorizedException('No user found');
    }

    const user = req.user as {
      id: string;
      email: string;
    };

    return this.authService.generateJwt(user.id, user.email);
  }
}
