import { Button } from 'react-bootstrap';
import { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  type: 'submit' | 'button';
  size?: 'lg' | 'sm';
  action?: () => void;
}

const ActionButton: FC<Props> = ({ children, type, size = 'lg', action }) => {
  return (
    <>
      {action && (
        <div className="d-grid gap-2" style={{ width: '50%' }}>
          <Button type={type} size={size} onClick={action}>
            {children}
          </Button>
        </div>
      )}
      {!action && (
        <div className="d-grid gap-2" style={{ width: '50%', margin: '0 auto' }}>
          <Button type={type} size={size}>
            {children}
          </Button>
        </div>
      )}
    </>
  );
};

export default ActionButton;
