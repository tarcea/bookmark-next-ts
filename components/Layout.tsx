import styles from '../styles/Layout.module.css';
import Head from 'next/head';
import Nav from './Nav';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>My cool bookmark</title>
      </Head>
      <Nav />
      <div className='p-2'>
        <main className='p-1 '>{children}</main>
      </div>
    </>
  );
};

export default Layout;
