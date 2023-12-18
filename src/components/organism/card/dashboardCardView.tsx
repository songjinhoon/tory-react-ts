import Block from '@components/molecule/block';
import DashboardCard from '@components/molecule/card/dashboardCard';

const DashboardCardView = () => {
  return (
    <>
      <DashboardCard type={'blog'}></DashboardCard>
      <Block></Block>
      <DashboardCard type={'pokemon'}></DashboardCard>
    </>
  );
};

export default DashboardCardView;
