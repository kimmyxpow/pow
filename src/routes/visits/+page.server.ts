import { visits as visitsSchema } from '$lib/db/schema';
import type { PageServerLoad } from './$types';
import { getDb } from '$lib/db/conn';
import { count, desc } from 'drizzle-orm';

export const load: PageServerLoad = async () => {
	const db = getDb();
	const visits = await db
		.select({
			route: visitsSchema.route,
			count: count(visitsSchema.route)
		})
		.from(visitsSchema)
		.groupBy(visitsSchema.route)
		.orderBy(desc(count(visitsSchema.route)));

	return {
		visits
	};
};
