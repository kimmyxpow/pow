import { cleanEnv, str } from 'envalid';

export const env = cleanEnv(process.env, {
    NODE_ENV: str({ choices: ['development', 'test', 'production', 'staging'] }),
    NEXT_PUBLIC_APP_URL: str(),
    DATABASE_URL: str(),
    BETTER_AUTH_SECRET: str(),
    BETTER_AUTH_URL: str({ default: 'http://localhost:3000 ' }),
    GITHUB_CLIENT_ID: str(),
    GITHUB_CLIENT_SECRET: str(),
});
