import Link from 'next/link';
import React from 'react';

export default function Page() {
  return (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
        backgroundColor: 'darkblue',
        color: 'white',
    }}>
      <h1>Hello, world!</h1>
      <h2>on Nextjs App Router</h2>
      <span style={{height:"20px"}}></span>
      <Link href='https://nknighta.github.io/'>
        My Sites
      </Link>
      <Link href="https://github.com/nknighta/next-app-router-test">
        Source Code
      </Link>
      <Link href="https://github.com/nknighta/">
        <p>@nknighta</p>
      </Link>
    </div>
  );
}