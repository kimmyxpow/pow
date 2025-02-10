import React, { PropsWithChildren } from 'react';
import Navbar from './navbar';
import Footer from './footer';
import Glitch from './glitch';
import SyntaxHighlight from './syntax-highlight';
import MouseTrail from './mouse-trail';

const Wrapper = ({ children }: PropsWithChildren) => {
    return (
        <>
            <div className="mx-auto flex min-h-svh max-w-3xl flex-col overflow-x-hidden px-8">
                <Navbar />
                <hr className="border-zinc-300" />
                {children}
                <hr className="mt-auto border-zinc-300" />
                <Footer />
            </div>
            <Glitch />
            <MouseTrail />
            <SyntaxHighlight />
        </>
    );
};

export default Wrapper;
