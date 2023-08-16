import { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './styles.module.css';
import clsx from 'clsx';

const paths = [
  { path: '/', name: 'Home' },
  { path: '/groups', name: 'Groups' },
  { path: '/settings', name: 'Settings' },
  { path: '/about', name: 'About' },
  { path: '/login', name: 'Logout' },
];

export default function Menu({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' || e) {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  useEffect(() => {
    onClose();
  }, [onClose, pathname]);

  return (
    <div className={clsx(styles.menu, isOpen && styles.open)}>
      <button className={styles.close} onClick={onClose} aria-label='close'>
        X
      </button>
      <ul className={styles.list}>
        {paths.map(({ path, name }) => (
          <li key={path}>
            <Link
              href={path}
              className={clsx(styles.link, path === pathname && styles.active)}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
