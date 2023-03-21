import Link from 'next/link';
import styles from './styles.module.css';
import MenuIcon from '@/../components/commons/icons/MenuIcon';
export default function Header() {
  return (
    <header className={styles.header}>
      <Link href='/' className={styles.home}>Gather Go</Link>
      <button className={styles.menu}>
        <MenuIcon />
      </button>
    </header>
  );
}
