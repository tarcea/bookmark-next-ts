import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import { AuthContextProvider } from '../context/AuthContext';
import { useRouter } from 'next/router';
import ProtectedRoute from '../components/ProtectedRoute';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const noAuthRequired = ['/', '/login', '/signup'];

  return (
    <AuthContextProvider>
      <Layout>
        {noAuthRequired.includes(router.pathname) ? (
          <Component {...pageProps} />
        ) : (
          <ProtectedRoute>
            <Component {...pageProps} />
          </ProtectedRoute>
        )}
      </Layout>
    </AuthContextProvider>
  );
};

export default MyApp;
