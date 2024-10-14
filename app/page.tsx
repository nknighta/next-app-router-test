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
    </div>
  );
}