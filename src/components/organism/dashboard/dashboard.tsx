import Block from '@components/molecule/block/block';
import DashboardCard from '@components/molecule/card/dashboardCard';

const Dashboard = () => {
  return (
    <>
      <DashboardCard type={'blog'}></DashboardCard>
      <Block></Block>
      <DashboardCard type={'pokemon'}></DashboardCard>
    </>
  );
};

export default Dashboard;
