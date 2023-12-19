import { Button } from '../../page/auth/styles';
import React, { FC } from 'react';
import { useModalDispatch } from '@context/modal';

type Props = {
  isSubmitButton?: boolean;
  isCancelButton?: boolean;
  onCancel?: () => void;
};

const FormAction: FC<Props> = React.memo(
  ({ isSubmitButton = true, isCancelButton = true, onCancel }) => {
    const modalDispatch = useModalDispatch();
    const _onCancel = onCancel || (() => modalDispatch({ type: 'closeModal' }));

    return (
      <div style={{ width: '100%', height: '100px' }}>
        {isSubmitButton && <Button type={'submit'}>OK</Button>}
        {isCancelButton && (
          <Button type={'button'} onClick={() => _onCancel()}>
            CANCEL
          </Button>
        )}
      </div>
    );
  },
);

export default FormAction;
