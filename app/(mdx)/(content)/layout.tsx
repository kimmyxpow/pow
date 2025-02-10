export default function MdxLayout({ children }: { children: React.ReactNode }) {
    return <div className="prose prose-p:text-justify max-w-none py-8">{children}</div>;
}
