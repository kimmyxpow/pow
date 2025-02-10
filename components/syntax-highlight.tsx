'use client';

import { useEffect } from 'react';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import 'highlight.js/styles/github.min.css';

hljs.registerLanguage('javascript', javascript);

const SyntaxHighlight = () => {
    useEffect(() => {
        hljs.highlightAll();
    }, []);

    return <></>;
};

export default SyntaxHighlight;
