import { CSSProperties, FC } from 'react';

interface Props {
  style?: CSSProperties;
}

const CommonBlock: FC<Props> = ({ style }) => {
  return <div style={style ? style : { height: '86', width: '10rem' }}></div>;
};

export default CommonBlock;
