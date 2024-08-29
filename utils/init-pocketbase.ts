import PocketBase from 'pocketbase';

export async function initPocketBase() {
    const pb = new PocketBase(process.env.NEXT_PUBLIC_POCKETBASE_URL);

    return pb;
}
