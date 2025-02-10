import { createAuthClient } from 'better-auth/react';
import { env } from './env';

export const authClient = createAuthClient({
    baseURL: env.NEXT_PUBLIC_APP_URL,
});

export const signIn = async () => {
    await authClient.signIn.social({
        provider: 'github',
        callbackURL: '/guestbook',
    });
};

export const signOut = async () => await authClient.signOut();
export const useSession = () => authClient.useSession();
