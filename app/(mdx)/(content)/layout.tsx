import { PropsWithChildren } from 'react';

export default function MdxLayout({ children }: PropsWithChildren) {
    return <div className="prose prose-p:text-justify max-w-none py-8">{children}</div>;
}
