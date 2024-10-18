export default () => ({
  database: {
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT || '5432', 10),
  },
  redis: {
    host: process.env.REDIS_HOST,
    port: parseInt(process.env.REDIS_PORT || '6379', 10),
  },
});

export enum EnvironmentVariables {
  GOOGLE_OAUTH_CLIENT_ID = 'GOOGLE_OAUTH_CLIENT_ID',
  GOOGLE_OAUTH_CLIENT_SECRET = 'GOOGLE_OAUTH_CLIENT_SECRET',
  DATABASE_URL = 'DATABASE_URL',
  REDIS_URL = 'REDIS_URL',
  GOOGLE_OAUTH_REDIRECT_URL = 'GOOGLE_OAUTH_REDIRECT_URL',
  GOOGLE_OAUTH_SCOPES = 'GOOGLE_OAUTH_SCOPES',
  JWT_SECRET = 'JWT_SECRET',
}
