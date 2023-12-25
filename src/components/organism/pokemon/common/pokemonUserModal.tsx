import ModalLayout from '@components/organism/skeleton/modal/modalLayout';
import { useState } from 'react';
import useUser, { IUseUserHook } from '@hooks/useUser';
import styled from '@emotion/styled';
import useBox from '@hooks/useBox';
import { IBox } from '@type/box';
import PokemonImageCard from '@components/molecule/card/pokemonImageCard';

const PokemonUserModal = () => {
  const [title] = useState('PokemonTrainer');
  const { user }: IUseUserHook = useUser();
  const { findByUserIdAndIsPartner } = useBox();

  return (
    <ModalLayout title={title} style={{ height: 700 }}>
      <Field>
        <h4>nickname</h4>
        <p>{user.nickname}</p>
      </Field>
      <Field>
        <h4>email</h4>
        <p>{user.email}</p>
      </Field>
      <Field>
        <h4>tellNum</h4>
        <p>{user.tellNum}</p>
      </Field>
      <PokemonBlock>
        {user &&
          findByUserIdAndIsPartner().map((box: IBox) => (
            <PokemonImageCard
              key={box.id}
              id={box.pokemon.id}
              name={box.pokemon.name}
              src={box.pokemon.image}
            />
          ))}
      </PokemonBlock>
    </ModalLayout>
  );
};

export default PokemonUserModal;

const Field = styled.div`
  padding: 0 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PokemonBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
