'use client';
import styles from './page.module.css';
import  Login  from '@/../components/Login';
import  Card  from '@/../components/Card';

export default function Home() {
  return (
    <main className={styles.main}>
      {/* <Login /> */}
      <Card />
      <Card />
    </main>
  );
}
