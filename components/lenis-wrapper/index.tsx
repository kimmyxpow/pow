'use client';

import ReactLenis from 'lenis/react';
import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
};

const LenisWrapper = ({ children }: Props) => {
    return <ReactLenis root>{children}</ReactLenis>;
};

export default LenisWrapper;
