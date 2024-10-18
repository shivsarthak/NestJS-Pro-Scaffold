import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { User, UserProperties } from 'src/auth/user.decorator';
import { UserService } from './user.service';
import { UserResponseDto } from './types/user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('me')
  @UseGuards(JwtAuthGuard)
  getUser(@User(UserProperties.ID) userId: string): Promise<UserResponseDto> {
    return this.userService.getUserById(userId);
  }
}
