import type { MDXComponents } from 'mdx/types';
import { PropsWithChildren } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.min.css';

const Pre = ({ children }: PropsWithChildren) => {
    return <pre className="hljs">{children}</pre>;
};

const Code = ({ className, children }: { className?: string; children: string }) => {
    if (!className) return <code>{children}</code>;

    const language = className.replace('language-', '');

    return (
        <code
            className={`language-${language}`}
            dangerouslySetInnerHTML={{
                __html: hljs.highlight(children.trim(), {
                    language,
                }).value,
            }}
        />
    );
};

const customComponents = {
    pre: Pre,
    code: Code,
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        ...components,
        ...customComponents,
    };
}
