import { FC, useEffect, useState } from 'react';
import cx from 'classnames';

import { ArrowDown } from '@/assets';

import styles from './dropdown.module.scss';
import useOutsideClick from '@/hooks/useOutsideClick';

export type DropdownObj = {
  id: number;
  name: string;
  value: string;
  label: string;
};

interface Props {
  items: Array<string | number | DropdownObj>;
  itemKey?: keyof DropdownObj;
  selectedItem: number;
  // eslint-disable-next-line no-unused-vars
  onChange: (index: number) => void;
}

const NewDropdown: FC<Props> = ({
  items,
  itemKey,
  selectedItem = 0,
  onChange,
}) => {
  const { ref, isOpen, setIsOpen } = useOutsideClick();
  const [currentText, setCurrentText] = useState('');

  useEffect(() => {
    if (typeof items[selectedItem] !== 'object') {
      setCurrentText(items[selectedItem].toString());
    } else if (itemKey) {
      setCurrentText((items[selectedItem] as DropdownObj)[itemKey].toString());
    }
  }, [selectedItem]);

  const handleClickDropdownItem = (index: number) => {
    onChange(index);
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <div className={styles.dropdownWrapper} ref={ref}>
        {currentText}
        <ArrowDown onClick={() => setIsOpen((prevState) => !prevState)} />
        {isOpen && (
          <div className={styles.dropdownItems}>
            {items.map((value, index) => {
              const text =
                typeof value !== 'object'
                  ? value.toString()
                  : itemKey && value[itemKey].toString();
              return (
                <div
                  key={text}
                  className={cx(
                    styles.item,
                    index === selectedItem && styles.itemSelected
                  )}
                  onClick={() => handleClickDropdownItem(index)}
                >
                  {text}
                </div>
              );
            })}
          </div>
        )}
      </div>
      <div>{`itemKey : ${itemKey}`}</div>
    </>
  );
};

export default NewDropdown;
