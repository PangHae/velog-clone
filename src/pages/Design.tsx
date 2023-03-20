import { Dispatch, FC, SetStateAction, useState } from 'react';
import NewDropdown from '@/components/base/NewDropdown';

const dropdownItem1 = [1, 2, 3, 4];
const dropdownItem2 = ['이번 주', '이번 달', '이번 년', '전체'];
const dropdownItem3 = [
  {
    id: 1,
    name: 'haen1',
    value: '1해인',
    label: '일해인',
  },
  {
    id: 2,
    name: 'haen2',
    value: '2해인',
    label: '이해인',
  },
  {
    id: 3,
    name: 'haen3',
    value: '3해인',
    label: '삼해인',
  },
  {
    id: 4,
    name: 'haen4',
    value: '4해인',
    label: '사해인',
  },
];

const Design: FC = () => {
  const [currentItem1, setCurrentItem1] = useState(0);
  const [currentItem2, setCurrentItem2] = useState(0);
  const [currentItem3, setCurrentItem3] = useState(0);

  const handleChangeItem =
    (dispatcher: Dispatch<SetStateAction<number>>) => (index: number) => {
      dispatcher(index);
    };

  return (
    <div style={{ display: 'flex', height: '100wh', gap: '3rem' }}>
      <NewDropdown
        items={dropdownItem1}
        selectedItem={currentItem1}
        onChange={handleChangeItem(setCurrentItem1)}
      />
      <NewDropdown
        items={dropdownItem2}
        selectedItem={currentItem2}
        onChange={handleChangeItem(setCurrentItem2)}
      />
      <NewDropdown
        items={dropdownItem3}
        itemKey="label"
        selectedItem={currentItem3}
        onChange={handleChangeItem(setCurrentItem3)}
      />
    </div>
  );
};

export default Design;
