import { PropsWithChildren } from 'react';
import Divider from '~/components/divider';
import Footer from '~/components/footer';
import MouseTrail from '~/components/mouse-trail';
import Navbar from '~/components/navbar';
import SyntaxHighlight from '~/components/syntax-highlight';

const PowWrapper = ({ children }: PropsWithChildren) => {
    return (
        <>
            <div className="mx-auto flex min-h-svh max-w-3xl flex-col overflow-x-hidden px-8">
                <Navbar />
                <Divider />
                {children}
                <Divider className="mt-auto" />
                <Footer />
            </div>
            <div className='animate-glitch pointer-events-none fixed -inset-24 z-50 bg-[url("/texture.png")] opacity-[0.08]'></div>
            <MouseTrail />
            <SyntaxHighlight />
        </>
    );
};

export default PowWrapper;
