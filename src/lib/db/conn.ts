import { env } from '$env/dynamic/private';
import { drizzle } from 'drizzle-orm/neon-serverless';
import { Pool } from '@neondatabase/serverless';

const client = new Pool({ connectionString: env.DATABASE_URL });
export const db = drizzle(client);
