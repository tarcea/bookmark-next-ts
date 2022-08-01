import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div>
      {user.displayName}
      <p>email: {user.email}</p>
    </div>
  );
};

export default Dashboard;
