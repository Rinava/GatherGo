// 'use client'
import styles from './page.module.css';
import mock from '@/../mocks/groups.json';
import Card from '../../../../components/Card';


export default function Group({ params }) {
  const { groupID } = params;
  const group = mock.groups.find((group) => group.id === groupID) ;
  return (
    <main className={styles.main}>
      <Card
        id={group?.id}
        title={group?.title}
        activities={group?.activities}
        people={group?.people}
        className={styles.group}
      />
    </main>
  );
}
