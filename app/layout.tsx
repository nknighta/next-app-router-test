import React from 'react';
import './global.css';

export default function Layout({children}: {children: React.ReactNode}) {
  const GITHUB_PAGES = process.env.GITHUB_PAGES === 'true' ? true : false;
  return (
    <html>
        <head>
            <title>Nextjs App Router</title>
            <link rel='icon' href={GITHUB_PAGES === true ? '/next-app-router-test/favicon.ico': '/favicon.ico'} />
        </head>
        <body>
            <main>{children}</main>
        </body>
    </html>
  );
}