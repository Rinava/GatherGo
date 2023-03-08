'use client';
import styles from './page.module.css';
import { useSession } from 'next-auth/react';

export default function Home() {
  const { data: session } = useSession();
  return (
    <main className={styles.main}>
      {session ? (
        <p>Logged in as {session?.user?.email}</p>
      ) : (
        <p>Not logged in</p>
      )}
    </main>
  );
}
