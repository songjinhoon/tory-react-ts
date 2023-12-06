import { Form } from 'react-bootstrap';
import InputLabel from '@components/atom/input/inputLabel';
import { FC } from 'react';
import CommonBlock from '@components/atom/block/commonBlock';
import CommonButton from '@components/atom/button/commonButton';

interface Props {
  action: any;
  register: any;
  fields: any[];
}

const CommonForm: FC<Props> = ({ action, register, fields }) => {
  return (
    <Form style={{ width: '70%', flex: '2' }} onSubmit={action}>
      {fields.map((field: any, index: number) => (
        <InputLabel
          key={++index}
          register={register}
          field={field}
        ></InputLabel>
      ))}
      <CommonBlock></CommonBlock>
      <CommonButton
        style={{ width: '10rem', height: '3rem', marginTop: '3rem' }}
      >
        SignIn
      </CommonButton>
    </Form>
  );
};
export default CommonForm;
