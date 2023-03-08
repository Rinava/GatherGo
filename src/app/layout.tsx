'use client';
import { SessionProvider } from 'next-auth/react';
import './globals.css';

export const metadata = {
  title: 'GatherGo',
};

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
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
