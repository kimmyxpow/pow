import { createAuthClient } from 'better-auth/react';

export const authClient = createAuthClient({
    baseURL: process.env.NEXT_PUBLIC_APP_URL!,
});

export const signIn = async () => {
    await authClient.signIn.social({
        provider: 'github',
        callbackURL: '/guestbook',
    });
};

export const useSession = () => authClient.useSession();
