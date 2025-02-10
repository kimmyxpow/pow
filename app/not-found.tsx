import Image from 'next/image';
import Link from 'next/link';

const NotFound = () => {
    return (
        <div className="space-y-8 py-8">
            <p className="bg-primary-300 mx-auto max-w-max rounded-full px-4 py-1 text-center text-sm font-medium">
                oops! looks like you’re lost
            </p>
            <h1 className="text-center text-6xl font-black">404</h1>
            <p>
                in the vast expanse of the digital universe, it seems our paths have diverged. the page you seek has
                drifted away, like a ship lost at sea, or a love letter never sent. perhaps it was a fleeting dream, or
                maybe it’s hiding, waiting for the right moment to reappear.
            </p>
            <p>but do not despair, dear wanderer. here are a few paths you can take:</p>
            <ul>
                <li>
                    1️⃣ <strong>retrace your steps:</strong> check the url, for it might hold the key to our reunion.
                </li>
                <li>
                    2️⃣ <strong>return whence you came:</strong> the back button may lead you to familiar grounds.
                </li>
                <li>
                    3️⃣ <strong>find solace in the beginning:</strong> visit my{' '}
                    <Link href="/" className="font-bold underline">
                        homepage
                    </Link>{' '}
                    and start anew.
                </li>
            </ul>
            <p>while you ponder your next move, gaze upon this symbol of hope:</p>
            <div className="flex justify-center gap-2">
                <Image
                    width={160}
                    height={160}
                    className="h-40"
                    src="https://media1.tenor.com/m/q468PomLqx8AAAAd/cat-fall.gif"
                    alt=""
                />
                <Image
                    width={160}
                    height={160}
                    className="h-40"
                    src="https://media1.tenor.com/m/LJiVS6FmHQ8AAAAd/nerd-plink.gif"
                    alt=""
                />
                <Image
                    width={200}
                    height={200}
                    className="h-40"
                    src="https://media1.tenor.com/m/QbgMgpETdRIAAAAd/cat-no-no.gif"
                    alt=""
                />
            </div>
            <p>
                if you believe this separation is a mistake of fate, please send me a message, and i shall try to mend
                our broken link.
            </p>
            <p>until we meet again, pow.</p>
        </div>
    );
};

export default NotFound;
