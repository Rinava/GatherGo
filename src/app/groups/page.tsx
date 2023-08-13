'use client';
import styles from './page.module.css';
import Card from '@/../components/Card';
import mockGroups from '@/../mocks/groups.json';

export default function Groups() {
  const { groups } = mockGroups;
  return (
    <main className={styles.main}>
      {groups.map((group) => (
        <Card
          key={group.id}
          id={group.id}
          title={group.title}
          activities={group.activities}
          people={group.people}
        />
      ))}
    </main>
  );
}
