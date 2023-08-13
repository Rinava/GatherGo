'use client';
import styles from './page.module.css';
import Login from '@/../components/Login';
import Card from '@/../components/Card';
import mock from '@/../mocks/cards.json';
export default function Home() {
  return (
    <main className={styles.main}>
      {/* <Login /> */}
      {mock.map((card) => {
        return (
          <Card key={card.id} group={card.group} activities={card.activities} />
        );
      })}
    </main>
  );
}
