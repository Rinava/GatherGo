import styles from './styles.module.css';
import Image from 'next/image';

interface CardProps {
  group: string;
  activities: string[];
}
const Card = ({ group, activities }: CardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
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
        <h2 className={styles.title}>Card Title</h2>
      </div>
      <h3 className={styles.subtitle}>Last added</h3>
      <ul className={styles.activities}>
        {activities.map((activity) => {
          return (
            <li className={styles.activity} key={activity}>
              {activity}
            </li>
          );
        })}
      </ul>
      <button className={styles.randomize}>Randomize</button>
    </div>
  );
};

export default Card;
