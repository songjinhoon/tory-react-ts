import Block from '@components/molecule/block';
import DashboardCard from '@components/molecule/card/dashboardCard';

const DashboardCardBox = () => {
  return (
    <>
      <DashboardCard type={'blog'}></DashboardCard>
      <Block></Block>
      <DashboardCard type={'pokemon'}></DashboardCard>
    </>
  );
};

export default DashboardCardBox;
