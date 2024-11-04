export default {
    head: (
        <>
            <title>NinjaWorld.io Docs</title>
        </>
    ),
    logo: <span>Ninja Worlds Docs</span>,
    docsRepositoryBase: 'https://github.com/danncarlos/nw.io-docs',
    project: {
        link: 'https://github.com/danncarlos/nw.io-docs'
    },
    chat: {
        link: 'https://x.com/dannCodex',
        icon: (
            <svg width="24" height="24" viewBox="0 0 248 204">
                <path
                    fill="currentColor"
                    d="M221.95 51.29c.15 2.17.15 4.34.15 6.53 0 66.73-50.8 143.69-143.69 143.69v-.04c-27.44.04-54.31-7.82-77.41-22.64 3.99.48 8 .72 12.02.73 22.74.02 44.83-7.61 62.72-21.66-21.61-.41-40.56-14.5-47.18-35.07a50.338 50.338 0 0 0 22.8-.87C27.8 117.2 10.85 96.5 10.85 72.46v-.64a50.18 50.18 0 0 0 22.92 6.32C11.58 63.31 4.74 33.79 18.14 10.71a143.333 143.333 0 0 0 104.08 52.76 50.532 50.532 0 0 1 14.61-48.25c20.34-19.12 52.33-18.14 71.45 2.19 11.31-2.23 22.15-6.38 32.07-12.26a50.69 50.69 0 0 1-22.2 27.93c10.01-1.18 19.79-3.86 29-7.95a102.594 102.594 0 0 1-25.2 26.16z"
                />
            </svg>
        )
    },
    editLink: {
        component: null,
    },
    feedback: {
        content: 'Question? Give usdd feedback →',
        labels: 'feedback'
    },
    banner: {
        key: 'version',
        content: (
            <span>Ninja World está atualmente em desenvolvimento, informações e imagens podem não representar o resultado final do projeto.</span>
            // <a href="https://nextra.site" target="_blank">
            // </a>
            // <a href="https://nextra.site" target="_blank">
            //     🎉 Nextra 2.0 is released. Read more →
            // </a>
        )
    },

    footer: {
        content: (
            <div className="flex w-full flex-col items-center sm:items-start justify-center">
                <div>
                    <a className="nextra-focus flex items-center gap-1 text-current"
                        target="_blank"
                        rel="noreferrer"
                        title="vercel.com homepage"
                        href="https://vercel.com?utm_source=nextra.site">
                        <span>Powered by</span>
                        <svg height={20} viewBox="0 0 283 64" fill="none">
                            <title>Vercel</title>
                            <path
                                fill="currentColor"
                                d="M141.04 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM248.72 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM200.24 34c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9V5h9zM36.95 0L73.9 64H0L36.95 0zm92.38 5l-27.71 48L73.91 5H84.3l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10V51h-9V17h9v9.2c0-5.08 5.91-9.2 13.2-9.2z"
                            />
                        </svg>
                    </a>
                </div>
                <p className="mt-6 text-xs">
                    © {new Date().getFullYear()} The Nextra Project.
                </p>
            </div>
        )
    }
    // banner: {
    //     key: '2.0-release',
    //     content: (
    //         <a href="https://nextra.site" target="_blank">
    //             🎉 Nextra 2.0 is released. Read more →
    //         </a>
    //     )
    // }
    // ... other theme options
}