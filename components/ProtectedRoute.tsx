import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/login');
    }
  }, [user, router]);
  return <div>{user && children}</div>;
};

export default ProtectedRoute;
