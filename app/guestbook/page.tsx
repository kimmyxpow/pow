'use client';

import { Icon } from '@iconify/react';
import Image from 'next/image';
import Divider from '~/components/divider';
import { signIn, useSession } from '~/utils/auth-client';
import useSWR from 'swr';
import { SelectGuestbookWithUser } from '~/lib/db/schema';
import { useRef } from 'react';

type GuestbookResponse = {
    message: string;
    result?: SelectGuestbookWithUser[];
};

const fetcher = <T,>(url: string): Promise<T> => fetch(url).then((res) => res.json());

const MessageForm = ({ onSubmit }: { onSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void> }) => {
    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await onSubmit(e);
        formRef.current?.reset();
    };

    return (
        <form ref={formRef} className="flex items-center" onSubmit={handleSubmit}>
            <label htmlFor="message" className="mr-4">
                message:{' '}
            </label>
            <input
                className="border-primary-800 w-full border px-6 py-3 text-sm focus:outline-none"
                placeholder="what's on your mind?"
                type="text"
                name="message"
                id="message"
                autoComplete="off"
            />
            <button className="bg-primary-800 border-primary-800 hocus:bg-transparent hocus:text-primary-800 flex items-center gap-2 border px-6 py-3 text-sm text-white transition-all">
                send
                <Icon icon="material-symbols-light:send-outline" className="text-xl" />
            </button>
        </form>
    );
};

const MessagesList = ({
    isLoading,
    error,
    data,
}: {
    isLoading: boolean;
    error: Error | null;
    data: GuestbookResponse | undefined;
}) => {
    if (isLoading) return <p>this is loading too...</p>;
    if (error) return <p>error: {error.message}</p>;
    if (!data?.result?.length) {
        return (
            <span className="bg-primary-100 border-primary-800 text-primary-600 block p-6">
                echo... echo... echo... yep, still empty. say something? 🥺
            </span>
        );
    }

    return (
        <div className="space-y-4">
            {data.result.map((item) => (
                <div className="flex items-start gap-4" key={item.guestbook.id}>
                    <Image src={item.user.image as string} alt={item.user.name} width={40} height={40} />
                    <div className="bg-primary-100 p-4">
                        <div className="flex items-center justify-between gap-10">
                            <h2>{item.user.name}</h2>
                            <p className="text-xs text-gray-400">
                                {new Date(item.guestbook.createdAt).toLocaleString()}
                            </p>
                        </div>

                        <p className="text-sm">{item.guestbook.message}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

const Page = () => {
    const user = useSession();
    const { data, mutate, error, isLoading } = useSWR<GuestbookResponse>('/api/guestbook', fetcher);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        try {
            const formData = new FormData(e.currentTarget);
            const response = await fetch('/api/guestbook', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                const text = await response.text();
                throw new Error(`Server error: ${response.status} - ${text}`);
            }

            const json: GuestbookResponse = await response.json();
            mutate({ ...json, ...data });
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    const renderInputSection = () => {
        if (user.isPending) return <p>wait a sec. im gonna show u smth...</p>;
        if (user.data) return <MessageForm onSubmit={handleSubmit} />;
        return (
            <button
                onClick={signIn}
                className="bg-primary-800 border-primary-800 hocus:bg-transparent hocus:text-primary-800 flex items-center gap-2 border px-6 py-3 text-sm text-white transition-all"
            >
                <Icon icon="simple-icons:github" />
                leave a little note ✨
            </button>
        );
    };

    return (
        <section className="space-y-8 py-8">
            <div className="flex items-center justify-between">
                <h1 className="text-4xl">the guestbook</h1>
                {user.data && <p>welcome, {user.data.user.name}!</p>}
            </div>
            <p>
                umm... wanna leave a message? no pressure, but it’d be kinda nice. 🥺 (oh, you gotta log in with github
                first—sorry!)
            </p>
            <Divider />
            <div className="space-y-8">
                {renderInputSection()}
                <MessagesList isLoading={isLoading} error={error} data={data} />
            </div>
        </section>
    );
};

export default Page;

export const dynamic = 'force-static';
