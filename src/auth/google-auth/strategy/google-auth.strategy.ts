import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import { EnvironmentVariables } from 'src/config/configuration';
import { AuthStrategies } from 'src/constants';
import { GoogleAuthService } from '../google-auth.service';

@Injectable()
export class GoogleAuthStrategy extends PassportStrategy(
  Strategy,
  AuthStrategies.GOOGLE_OAUTH,
) {
  constructor(
    readonly configService: ConfigService,
    readonly googleAuthService: GoogleAuthService,
  ) {
    super({
      clientID: configService.get(EnvironmentVariables.GOOGLE_OAUTH_CLIENT_ID),
      clientSecret: configService.get(
        EnvironmentVariables.GOOGLE_OAUTH_CLIENT_SECRET,
      ),
      callbackURL: configService.get(
        EnvironmentVariables.GOOGLE_OAUTH_REDIRECT_URL,
      ),
      scope: configService
        .get(EnvironmentVariables.GOOGLE_OAUTH_SCOPES)
        .split(','),
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: VerifyCallback,
  ): Promise<any> {
    const user = await this.googleAuthService.validateGoogleUser(profile);
    done(null, user);
  }
}
