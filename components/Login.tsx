import { useRouter } from 'next/router';
import { useAuth } from '../context/AuthContext';
import {
  FacebookLoginButton,
  GoogleLoginButton,
  GithubLoginButton,
} from 'react-social-login-buttons';

const Login = () => {
  const { signInWithGoogle } = useAuth();
  const router = useRouter();

  const handleGoogleAuth = async () => {
    try {
      await signInWithGoogle();
      router.push('/');
    } catch (err) {
      console.log('Failed sign in with google');
    }
  };
  return (
    <div className='md:w-1/2'>
      <GoogleLoginButton onClick={handleGoogleAuth} />
      <FacebookLoginButton />
      <GithubLoginButton />
    </div>
  );
};

export default Login;
