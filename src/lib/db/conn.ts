import { env } from '$env/dynamic/private';
import { drizzle } from 'drizzle-orm/postgres-js';

export const db = drizzle(env.DATABASE_URL);
