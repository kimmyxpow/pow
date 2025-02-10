import { drizzle } from 'drizzle-orm/postgres-js';
import { env } from '../env';

export const db = drizzle(env.DATABASE_URL);
