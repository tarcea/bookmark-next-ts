import Image from 'next/image';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { user } = useAuth();

  const imgLoader = () => {
    return user.photo;
  };

  return (
    <div className='container mx-auto flex flex-col items-center p-2.5'>
      <div className=''>
        <Image
          src={user.photo}
          alt={user.displayName}
          width={50}
          height={50}
          loader={imgLoader}
          className='rounded-full'
          // layout='responsive'
        />
      </div>
      {user.displayName}
      <p>email: {user.email}</p>
    </div>
  );
};

export default Dashboard;
