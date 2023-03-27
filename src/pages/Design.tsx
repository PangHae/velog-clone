import { Dispatch, FC, SetStateAction, useState } from 'react';
import NewDropdown, { SingleValue } from '@/components/base/NewDropdown';

const dropdownItem = [
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
  const [itemId, setItemId] = useState<SingleValue>(0);

  const handleChangeItem =
    (dispatcher: Dispatch<SetStateAction<SingleValue>>) =>
    (item: SingleValue) => {
      dispatcher(item);
    };

  return (
    <div style={{ display: 'flex', height: '100wh', gap: '3rem' }}>
      <NewDropdown
        items={dropdownItem}
        selectedItem={itemId}
        onChange={handleChangeItem(setItemId)}
        itemKey=""
      />
    </div>
  );
};

export default Design;
