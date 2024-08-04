import { Icon } from "@iconify/react";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-8">
            <h2 className="text-4xl">looks like you&apos;re lost :((</h2>
            <Link
                href="/"
                className="group relative mx-auto transition-all hover:-rotate-6 hover:scale-110"
            >
                <span className="relative z-10 block rounded-full bg-white px-12 py-6 text-stone-800 transition-all group-hover:bg-stone-50">
                    Return to The Powland
                </span>
                <Icon
                    icon="tabler:paw"
                    className="absolute -right-6 top-0 -translate-x-10 translate-y-6 rotate-12 text-xl transition-all group-hover:translate-x-0 group-hover:translate-y-0"
                />
                <Icon
                    icon="tabler:paw"
                    className="absolute -right-8 top-6 -translate-x-12 rotate-[24deg] text-xl transition-all group-hover:translate-x-0"
                />
                <Icon
                    icon="tabler:paw"
                    className="absolute -left-6 bottom-0 -translate-y-6 translate-x-10 -rotate-[45deg] text-xl transition-all group-hover:translate-x-0 group-hover:translate-y-0"
                />
                <Icon
                    icon="tabler:paw"
                    className="absolute -left-8 bottom-6 translate-x-12 -rotate-12 text-xl transition-all group-hover:translate-x-0"
                />
            </Link>
        </div>
    );
}
