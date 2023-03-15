'use client';
import styles from './page.module.css';
import  LoginBtn  from '@/../components/LoginBtn';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        Gather Go  
      </h1>
      <LoginBtn />
    </main>
  );
}
