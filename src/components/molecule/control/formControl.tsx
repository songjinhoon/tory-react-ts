import React, { FC } from 'react';
import { useModalDispatch } from '@context/modal';
import Button from '@components/atom/button';
import styled from '@emotion/styled';
import Block from '@components/molecule/block/block';

type Props = {
  isSubmitButton?: boolean;
  isCancelButton?: boolean;
  onCancel?: () => void;
};

const FormControl: FC<Props> = React.memo(
  ({ isSubmitButton = true, isCancelButton = true, onCancel }) => {
    const modalDispatch = useModalDispatch();
    const _onCancel = onCancel || (() => modalDispatch({ type: 'closeModal' }));

    return (
      <Container>
        {isSubmitButton && (
          <Button type={'submit'} style={{ width: '100%', height: '3rem' }}>
            OK
          </Button>
        )}
        <Block></Block>
        {isCancelButton && (
          <Button
            event={() => _onCancel()}
            style={{ width: '100%', height: '3rem' }}
          >
            CANCEL
          </Button>
        )}
      </Container>
    );
  },
);

export default FormControl;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
