import Link from 'next/link';
import { useState, useCallback } from 'react';
import styles from './styles.module.css';
import MenuIcon from '@/../components/commons/icons/MenuIcon';
import Menu from '@/../components/Menu';
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <>
      <header className={styles.header}>
        <Link href='/' className={styles.home}>
          Gather Go
        </Link>
        <button className={styles.menu} onClick={() => setIsOpen(true)}>
          <MenuIcon />
        </button>
      </header>
      <Menu isOpen={isOpen} onClose={handleClose} />
    </>
  );
}
