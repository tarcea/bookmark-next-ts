import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';

const Message = () => {
  const { message, setMessage } = useAuth();

  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!message) {
      setVisible(false);
      return;
    }
    setVisible(true);
    const timer = setTimeout(() => {
      setVisible(false);
      setMessage('');
    }, 5000);
    return () => clearTimeout(timer);
  }, [message, setMessage]);
  // if (!visible) return null;
  return visible ? (
    <div
      className='fixed top-20 left-1/2 -translate-y-1/2 -translate-x-1/2 text-center bg-rose-300 rounded w-80 z-40 text-s p-5 opacity-70 md:w-96'
      onClick={() => setVisible(false)}
    >
      {message}
    </div>
  ) : null;
};

export default Message;
