import { Col, Form, Row } from 'react-bootstrap';
import React, { FC } from 'react';
import { Error } from '@components/page/auth/styles';

interface Pros {
  register: any;
  field: any;
}

const InputLabel: FC<Pros> = ({ register, field }) => {
  return (
    <Form.Group as={Row} className="mb-3">
      <Form.Label column sm="2">
        {field.name}
      </Form.Label>
      <Col sm="10">
        <Form.Control
          type={field.name === 'password' ? 'password' : 'text'}
          placeholder={
            field.name === 'password' ? 'enter password' : 'enter username'
          }
          {...register(field.name, field.option)}
        />
      </Col>
      {field.errors && <Error>{field.errors.message}</Error>}
    </Form.Group>
  );
};

export default InputLabel;