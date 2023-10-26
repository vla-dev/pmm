import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const Dashboard = () => {
  return <div className="min-h-full">
    <Header />
    <main>
      <Outlet />
    </main>
  </div>
}

export default Dashboard;
