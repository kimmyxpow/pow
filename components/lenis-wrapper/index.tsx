'use client';

import ReactLenis from 'lenis/react';

type Props = {
    children: React.ReactNode;
};

const LenisWrapper = ({ children }: Props) => {
    return <ReactLenis root>{children}</ReactLenis>;
};

export default LenisWrapper;
