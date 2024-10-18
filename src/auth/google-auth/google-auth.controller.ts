import { Controller, Get, Query, Req, Res, UseGuards } from '@nestjs/common';

import { Response, Request } from 'express';
import { GoogleAuthGuard } from './guard/google-auth.guard';
import { AuthService } from '../auth.service';
import { GoogleAuthService } from './google-auth.service';
import { AuthResponseDto } from '../types/auth.dto';

@Controller('auth/google')
export class GoogleAuthController {
  constructor(private readonly googleAuthService: GoogleAuthService) {}

  @Get('login')
  @UseGuards(GoogleAuthGuard)
  login() {}

  @Get('callback')
  @UseGuards(GoogleAuthGuard)
  callback(@Req() req: Request): AuthResponseDto {
    return this.googleAuthService.googleLogin(req);
  }
}
