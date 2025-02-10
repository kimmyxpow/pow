import { desc, eq } from 'drizzle-orm';
import { headers } from 'next/headers';
import { auth } from '~/lib/auth';
import { db } from '~/lib/db/conn';
import { guestbook, user } from '~/lib/db/schema';

export async function GET() {
    const result = await db
        .select()
        .from(guestbook)
        .innerJoin(user, eq(user.id, guestbook.userId))
        .orderBy(desc(guestbook.createdAt));
    return Response.json({ result, message: 'Message received' }, { status: 200 });
}

export async function POST(request: Request) {
    try {
        const session = await auth.api.getSession({
            headers: await headers(),
        });

        if (!session) return Response.json({ message: 'Unauthorized' }, { status: 401 });

        const formData = await request.formData();
        const message = formData.get('message') as string;

        if (!message) return Response.json({ message: 'No message' }, { status: 400 });
        if (message.length > 1000) return Response.json({ message: 'Message too long' }, { status: 400 });

        const inserted = await db.insert(guestbook).values({ userId: session.user.id, message }).returning();

        const result = await db
            .select()
            .from(guestbook)
            .where(eq(guestbook.id, inserted[0].id))
            .innerJoin(user, eq(user.id, guestbook.userId));

        return Response.json({ result, message: 'Message created' }, { status: 203 });
    } catch (error) {
        return Response.json({ result: error, message: 'Error created' }, { status: 500 });
    }
}
