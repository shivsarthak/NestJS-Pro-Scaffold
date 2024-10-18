import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthStrategies } from 'src/constants';

@Injectable()
export class JwtAuthGuard extends AuthGuard(AuthStrategies.JWT) {}
