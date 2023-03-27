import { FC, useState } from 'react';
import PortalModal from '@/components/base/PortalModal';
import useOutsideClick from '@/hooks/useOutsideClick';
import Button from '@/components/base/Button';
import NewDropdown, { SingleValue } from '@/components/base/NewDropdown';
// import NewDropdown from '@/components/base/NewDropdown';

// const dropdownItem1 = [1, 2, 3, 4];
// const dropdownItem2 = ['이번 주', '이번 달', '이번 년', '전체'];
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
  const { isOpen, setIsOpen, ref } = useOutsideClick<HTMLDivElement>();
  const [curId, setCurId] = useState(1);

  const handleChangeSelectedItem = (item: SingleValue) => {
    setCurId(item as number);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100wh',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Button onClick={() => setIsOpen((prev) => !prev)}>Modal 열기</Button>
      {/* {isOpen && ( */}
      <PortalModal
        ref={ref}
        isOpen={isOpen}
        title="Modal Test"
        setIsOpen={setIsOpen}
        // timeout={500}
      >
        <NewDropdown
          items={dropdownItem3}
          itemKey="label"
          selectedItem={curId}
          onChange={handleChangeSelectedItem}
        />
      </PortalModal>
      {/* )} */}
    </div>
  );
};

export default Design;
