import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {
    h1: ({ children }) => <h1 className="text-4xl font-light">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl font-light">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl font-light">{children}</h3>,
    h4: ({ children }) => <h4 className="text-xl font-light">{children}</h4>,
    h5: ({ children }) => <h5 className="text-lg font-light">{children}</h5>,
    h6: ({ children }) => <h6 className="text-base font-light">{children}</h6>,
    p: ({ children }) => <p className="text-base font-light">{children}</p>,
    a: ({ children }) => <a className="text-base font-light">{children}</a>,
    ul: ({ children }) => <ul className="text-base font-light">{children}</ul>,
    ol: ({ children }) => <ol className="text-base font-light">{children}</ol>,
    li: ({ children }) => <li className="text-base font-light">{children}</li>,
    blockquote: ({ children }) => <blockquote className="text-base font-light">{children}</blockquote>,
    code: ({ children }) => <code className="text-base font-light">{children}</code>,
    pre: ({ children }) => <pre className="text-base font-light">{children}</pre>,
    table: ({ children }) => <table className="text-base font-light">{children}</table>,
    thead: ({ children }) => <thead className="text-base font-light">{children}</thead>,
    tbody: ({ children }) => <tbody className="text-base font-light">{children}</tbody>,
    tr: ({ children }) => <tr className="text-base font-light">{children}</tr>,
    th: ({ children }) => <th className="text-base font-light">{children}</th>,
    td: ({ children }) => <td className="text-base font-light">{children}</td>,
    img: ({ children }) => <img className="text-base font-light" src={children} alt="" />,
    hr: ({ children }) => <hr className="text-base font-light" />,
    span: ({ children }) => <span className="text-base font-light">{children}</span>,
    div: ({ children }) => <div className="text-base font-light">{children}</div>,
    strong: ({ children }) => <strong className="text-base font-light">{children}</strong>,
    em: ({ children }) => <em className="text-base font-light">{children}</em>,
    del: ({ children }) => <del className="text-base font-light">{children}</del>,
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        ...components,
    };
}