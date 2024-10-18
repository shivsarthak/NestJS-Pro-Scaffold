import { ConfigService } from '@nestjs/config';
import { AuthGuard } from '@nestjs/passport';
import { AuthStrategies } from 'src/constants';

export class GoogleAuthGuard extends AuthGuard(AuthStrategies.GOOGLE_OAUTH) {}
