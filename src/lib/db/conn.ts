import { env } from '$env/dynamic/private';
import { drizzle } from 'drizzle-orm/neon-serverless';
import { Pool } from '@neondatabase/serverless';

export function getDb() {
	const client = new Pool({ connectionString: env.DATABASE_URL });
	return drizzle(client);
}
