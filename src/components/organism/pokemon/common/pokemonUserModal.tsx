import ModalLayout from '@components/organism/skeleton/modal/modalLayout';
import { useState } from 'react';
import useUser, { IUseUserHook } from '@hooks/useUser';
import styled from '@emotion/styled';
import PokemonSimpleCard from '@components/molecule/card/pokemonSimpleCard';
import useBox from '@hooks/useBox';

const PokemonUserModal = () => {
  const [title] = useState('PokemonTrainer');
  const { user }: IUseUserHook = useUser();
  const { findByUserId } = useBox();
  const pokemons = findByUserId(user.id);

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
        {pokemons.map((pokemonId: number) => (
          <PokemonSimpleCard key={pokemonId} id={pokemonId} />
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
  max-height: 400px;
  overflow-y: auto;
`;
