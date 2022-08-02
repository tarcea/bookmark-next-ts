import { useRouter } from 'next/router';
import { useAuth } from '../context/AuthContext';
import {
  FacebookLoginButton,
  GoogleLoginButton,
  GithubLoginButton,
} from 'react-social-login-buttons';

const Login = () => {
  const { signInWithGoogle, signInWithFacebook, signInWithGithub } = useAuth();
  const router = useRouter();

  const handleGoogleAuth = async () => {
    try {
      await signInWithGoogle();
      router.push('/');
    } catch (err) {
      console.log('Failed sign in with google', err);
    }
  };

  const handleFacebookAuth = async () => {
    try {
      await signInWithFacebook();
      router.push('/');
    } catch (err) {
      console.log('Failed sign in with facebook', err);
    }
  };

  return (
    <div className='md:w-1/2'>
      <GoogleLoginButton onClick={handleGoogleAuth} />
      <FacebookLoginButton onClick={handleFacebookAuth} />
      <GithubLoginButton />
    </div>
  );
};

export default Login;
