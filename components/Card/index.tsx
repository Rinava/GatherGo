import styles from './styles.module.css';
import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';

interface CardProps {
  id: string;
  title?: string;
  activities?: activity[];
  people?: string[];
  className?: string;
}
interface activity {
  id: string;
  title: string;
  description?: string;
  location?: string;
}

const Card = ({ id, title, activities, people, className }: CardProps) => {
  return (
    <div className={clsx(styles.card, className)}>
      <Link className={styles.header} href='/groups/[id]' as={`/groups/${id}`}>
        <div className={styles.people}>
          <Image
            className={styles.profile}
            src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
            alt='Profile'
            width={50}
            height={50}
          />
          <Image
            className={styles.profile}
            src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
            alt='Profile'
            width={50}
            height={50}
          />
          <Image
            className={styles.profile}
            src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
            alt='Profile'
            width={50}
            height={50}
          />
        </div>
        <h2 className={styles.title}>{title}</h2>
      </Link>
      <h3 className={styles.subtitle}>Last added</h3>
      <ul className={styles.activities}>
        {activities ? (
          activities.map((activity) => (
            <li key={activity.id} className={styles.activity}>
              <Link
                href='/groups/[id]/activities/[activityId]'
                as={`/groups/${id}/activities/${activity.id}`}>
                {activity.title}
              </Link>
            </li>
          ))
        ) : (
          <p>No activities yet, be the first to add</p>
        )}
      </ul>
      <button className={styles.randomize}>Randomize</button>
    </div>
  );
};

export default Card;
