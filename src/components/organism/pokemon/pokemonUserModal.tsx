import ModalLayout from '@components/organism/skeleton/modal/modalLayout';
import { useState } from 'react';
import useUser, { IUseUserHook } from '@hooks/useUser';
import styled from '@emotion/styled';
import PokemonCard from '@components/molecule/card/pokemonCard';

const PokemonUserModal = () => {
  const { user }: IUseUserHook = useUser();
  const [title] = useState('PokemonTrainer');

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
        {user.pokemons.map((pokemonId: number) => (
          <PokemonCard key={pokemonId} id={pokemonId} />
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
