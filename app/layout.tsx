import React from 'react';
import './global.css';

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <html>
        <head>
            <title>Nextjs App Router</title>
            <link rel='icon' href='/next-app-router-test/favicon.ico' />
        </head>
        <body>
            <main>{children}</main>
        </body>
    </html>
  );
}