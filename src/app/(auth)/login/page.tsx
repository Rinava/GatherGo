import { Metadata } from 'next';
import Link from 'next/link';
import Login from '@/../components/Login';

export const metadata: Metadata = {
  title: 'Login',
  description: 'Please Login to your account',
};

export default function LoginPage() {
  return (
    <div>
      <Link href='/'>Back</Link>
      <div>
        <div>
          <h1>Welcome back</h1>
          <p>Enter your email to sign in to your account</p>
          <Login />
        </div>
        <Link href='/register'>Don&apos;t have an account? Sign Up</Link>
      </div>
    </div>
  );
}
