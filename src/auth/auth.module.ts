import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';

import { UserModule } from 'src/user/user.module';
import { GoogleAuthController } from './google-auth/google-auth.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { GoogleAuthStrategy } from './google-auth/strategy/google-auth.strategy';
import { GoogleAuthService } from './google-auth/google-auth.service';
import { JwtModule } from '@nestjs/jwt';
import { EnvironmentVariables } from 'src/config/configuration';
import { JwtStrategy } from './jwt.strategy';
import { AuthController } from './auth.controller';

@Module({
  providers: [AuthService, GoogleAuthStrategy, GoogleAuthService, JwtStrategy],
  controllers: [GoogleAuthController, AuthController],
  imports: [
    UserModule,
    ConfigModule,
    HttpModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get(EnvironmentVariables.JWT_SECRET),
        signOptions: {
          expiresIn: '7 days',
        },
      }),
    }),
  ],
})
export class AuthModule {}
