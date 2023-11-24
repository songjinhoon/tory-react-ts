import { Form } from 'react-bootstrap';
import InputLabel from '@components/atom/button/inputLabel';
import { FC } from 'react';
import ActionButton from '@components/atom/button/actionButton';
import CommonBlock from '@components/atom/block/commonBlock';

interface Props {
  action: any;
  register: any;
  fields: any[];
}

const CommonForm: FC<Props> = ({ action, register, fields }) => {
  return (
    <Form style={{ width: '70%', flex: '5' }} onSubmit={action}>
      {fields.map((field: any, index: number) => (
        <InputLabel
          key={++index}
          register={register}
          field={field}
        ></InputLabel>
      ))}
      <CommonBlock></CommonBlock>
      <ActionButton type={'submit'}>SignIn</ActionButton>
    </Form>
  );
};
export default CommonForm;
