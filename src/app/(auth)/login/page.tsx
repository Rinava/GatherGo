import { Metadata } from 'next';
import Link from 'next/link';
import LoginBtn from '@/../components/LoginBtn';

export const metadata: Metadata = {
  title: 'Login',
  description: 'Login to your account',
};

export default function LoginPage() {
  return (
    <div>
      <Link href='/'>
        <>Back</>
      </Link>
      <div>
        <div>
          <h1>Welcome back</h1>
          <p>Enter your email to sign in to your account</p>
          <LoginBtn />
        </div>
        <p>
          <Link href='/register'>Don&apos;t have an account? Sign Up</Link>
        </p>
      </div>
    </div>
  );
}
