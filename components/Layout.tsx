import styles from '../styles/Layout.module.css';
import Head from 'next/head';
import Nav from './Nav';
import Footer from './Footer';
import Message from './Message';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>My cool bookmark</title>
      </Head>
      <Message />
      <Nav />
      <div className='p-2'>
        <main className='p-1 '>{children}</main>
      </div>
      <div className='mt-8'>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
