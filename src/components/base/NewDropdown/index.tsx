import { useEffect, useState } from 'react';
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

interface Props<T extends unknown> {
  items: Array<T>;
  itemKey?: T extends DropdownObj ? keyof T : undefined;
  selectedItem: number;
  // eslint-disable-next-line no-unused-vars
  onChange: (index: number) => void;
}

const NewDropdown = <T extends unknown>({
  items,
  itemKey,
  selectedItem = 0,
  onChange,
}: Props<T>) => {
  const { ref, isOpen, setIsOpen } = useOutsideClick();
  const [currentText, setCurrentText] = useState('');

  useEffect(() => {
    if (typeof items[selectedItem] !== 'object') {
      setCurrentText((items[selectedItem] as Object).toString());
    } else if (itemKey) {
      setCurrentText(
        ((items[selectedItem] as DropdownObj)[itemKey] as Object).toString()
      );
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
                  ? (value as Object).toString()
                  : itemKey &&
                    ((value as DropdownObj)[itemKey] as Object).toString();
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
