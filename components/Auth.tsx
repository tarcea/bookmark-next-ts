import { useRouter } from 'next/router';
import { useAuth } from '../context/AuthContext';
import {
  FacebookLoginButton,
  GoogleLoginButton,
  GithubLoginButton,
} from 'react-social-login-buttons';

const Auth = () => {
  const { signInWithGoogle, signInWithFacebook, signInWithGithub, setMessage } =
    useAuth();
  const router = useRouter();

  const handleGoogleAuth = async () => {
    try {
      await signInWithGoogle();
      router.push('/');
    } catch (err) {
      if (err instanceof Error) {
        setMessage('Failed sign in with google' + '-' + err.message);
      } else {
        setMessage('Someting went wrong while signing in with google');
      }
    }
  };

  const handleFacebookAuth = async () => {
    try {
      await signInWithFacebook();
      router.push('/');
    } catch (err) {
      if (err instanceof Error) {
        setMessage('Failed sign in with facebook' + '-' + err.message);
      } else {
        setMessage('Someting went wrong while signing in with facebook');
      }
    }
  };

  const handleGithubAuth = async () => {
    try {
      await signInWithGithub();
      router.push('/');
    } catch (err) {
      if (err instanceof Error) {
        setMessage('Failed sign in with github' + '-' + err.message);
      } else {
        setMessage('Someting went wrong while signing in with github');
      }
    }
  };

  return (
    <div className='md:w-1/2 mx-auto'>
      <p className='text-center text-3xl p-2.5'>Choose a login option</p>
      <GoogleLoginButton onClick={handleGoogleAuth} />
      <FacebookLoginButton onClick={handleFacebookAuth} />
      <GithubLoginButton onClick={handleGithubAuth} />
    </div>
  );
};

export default Auth;
