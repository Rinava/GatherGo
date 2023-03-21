'use client';
import { SessionProvider } from 'next-auth/react';
import './globals.css';
import Header from '@/../components/Header';

// export const metadata = {
//   title: 'Gather Go',
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
  pageProps: { session: any };
}) {
  return (
    <html lang='en'>
      <body>
        <SessionProvider refetchOnWindowFocus={false}>
          <Header />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
