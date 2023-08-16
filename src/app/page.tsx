'use client';
import styles from './page.module.css';
import  Login  from '@/../components/Login';

export default function Home() {
  const AddUser = async(e) => {
    e.preventDefault();
    await fetch('api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };
    
  return (
    <main className={styles.main}>
      <Login />
       {/* <button onClick={AddUser}>Add User</button> */}
    </main>
  );
}
