import useUser from '@hooks/useUser';
import { useCallback, useEffect, useState } from 'react';
import { IUser } from '@type/user';
import useBox from '@hooks/useBox';
import { IBox } from '@type/box';
import { faker } from '@faker-js/faker';
import { IStat } from '@type/stat';

const UseStat = () => {
  const { users } = useUser();
  const { boxes } = useBox();
  const [stats, setStats] = useState<IStat>();

  const getDataColumns = useCallback(() => {
    return Object.keys(stats[0].data).map((key: string) => key);
  }, [stats]);

  useEffect(() => {
    if (users && boxes) {
      setStats(
        users.map((user: IUser) => ({
          id: user.id,
          nickname: user.nickname,
          data: {
            pokemonCount: boxes.filter((box: IBox) => box.userId === user.id)
              .length, //이런 데이터를 FE에서 처리를 한다면 문제가 될 수 있겠다.
            averageLevel: faker.number.int({ max: 100 }),
            averageAttack: faker.number.int({ max: 100 }),
            averageDefense: faker.number.int({ max: 100 }),
            averageSpeed: faker.number.int({ max: 100 }),
          },
        })),
      );
    }
  }, [users, boxes]);

  return { stats, getDataColumns };
};

export default UseStat;
