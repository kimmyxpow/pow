import { createAuthClient } from 'better-auth/react';

export const authClient = createAuthClient({
    baseURL: 'http://localhost:3000',
});

export const signIn = async () => {
    await authClient.signIn.social({
        provider: 'github',
        callbackURL: '/guestbook',
    });
};

export const signOut = async () => await authClient.signOut();
export const useSession = () => authClient.useSession();
