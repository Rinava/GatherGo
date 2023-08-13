// 'use client'
import styles from './page.module.css';
import mock from '@/../mocks/groups.json';
import Image from 'next/image';

export default function Activity({ params }) {
  const { groupID, activityID } = params;
  const group = mock.groups.find((group) => group.id === groupID);
  const activity = group?.activities?.find(
    (activity) => activity.id === activityID
  );
  const { title, description, people, proposed, location } = activity;
  return (
    <main className={styles.main}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.proposed}> 
        <span>Proposed by </span>
        {/* <Image src={proposed.image} alt='' width={20} height={20} /> */}
        <span> {proposed.name} </span>
      </p>

      {description && <p className={styles.description}>{description}</p>}
      {location && (
        <div>
          <h3 className={styles.location}>Location</h3>
          <p>{location}</p>
        </div>
      )}
    </main>
  );
}
