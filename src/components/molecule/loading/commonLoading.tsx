import { TailSpin } from 'react-loader-spinner';

const CommonLoading = () => {
  return (
    <div style={{ position: 'absolute', top: '50%', left: '50%' }}>
      <TailSpin
        height={80}
        width={80}
        color={'#4fa94d'}
        ariaLabel={'tail-spin-loading'}
        radius={1}
      />
    </div>
  );
};

export default CommonLoading;
