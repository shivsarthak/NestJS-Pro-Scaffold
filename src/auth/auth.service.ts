import {
  BadRequestException,
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import { AuthResponseDto, LoginDto, RegisterDto } from './types/auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  private async hashPassword(password: string) {
    return bcrypt.hash(password, 10);
  }

  async register(dto: RegisterDto): Promise<AuthResponseDto> {
    const user = await this.userService.getUserByEmail(dto.email);
    if (user) {
      throw new ConflictException('User already exists');
    }
    const hash = await this.hashPassword(dto.password);
    const newUser = await this.userService.createUser({
      email: dto.email,
      firstName: dto.firstName,
      lastName: dto.lastName,
      avatarUrl: dto.avatarUrl,
      hash,
    });
    return this.generateJwt(newUser.id, newUser.email);
  }

  async login(dto: LoginDto): Promise<AuthResponseDto> {
    const { email, password } = dto;
    const user = await this.userService.getUserByEmail(email);
    if (!user) {
      throw new UnauthorizedException('No user found with this email');
    }
    const hash = await this.hashPassword(password);

    if (user.hash !== hash) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return this.generateJwt(user.id, user.email);
  }

  generateJwt(userId: string, email: string): AuthResponseDto {
    const payload = { sub: userId, email };
    return { accessToken: this.jwtService.sign(payload) };
  }
}
