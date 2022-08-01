import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAuth } from '../context/AuthContext';
import styles from '../styles/Nav.module.css';

const Nav = () => {
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await logout();
      router.push('/');
    } catch (err) {
      console.log('Failed to logout');
    }
  };
  return (
    <nav className='bg-red-900 p-2.5 text-orange-50 flex justify-between text-xs md:text-lg'>
      <ul className='flex p-2'>
        <li className='hover:text-orange-300 p-2'>
          <Link href='/'>Home</Link>
        </li>
        <li className='hover:text-orange-300 p-2'>
          <Link href='/about'>About</Link>
        </li>
      </ul>
      {user && (
        <div className='hover:text-orange-300 p-4'>
          <Link href='/dashboard'>{user?.displayName}</Link>
        </div>
      )}
      <div className='hover:text-orange-300 p-4'>
        {user ? (
          <div onClick={handleLogout}>Logout</div>
        ) : (
          <div className='hover:text-orange-300'>
            <Link href='/login'>Login</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
