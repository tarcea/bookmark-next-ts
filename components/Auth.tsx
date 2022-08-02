import { useRouter } from 'next/router';
import { useAuth } from '../context/AuthContext';
import {
  FacebookLoginButton,
  GoogleLoginButton,
  GithubLoginButton,
} from 'react-social-login-buttons';

const Auth = () => {
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

  const handleGithubAuth = async () => {
    try {
      await signInWithGithub();
      router.push('/');
    } catch (err) {
      console.log('Failed sign in with github', err);
    }
  };

  return (
    <div className='md:w-1/2'>
      <GoogleLoginButton onClick={handleGoogleAuth} />
      <FacebookLoginButton onClick={handleFacebookAuth} />
      <GithubLoginButton onClick={handleGithubAuth} />
    </div>
  );
};

export default Auth;
