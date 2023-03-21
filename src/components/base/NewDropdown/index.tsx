import { useEffect, useState } from 'react';
import cx from 'classnames';

import { ArrowDown } from '@/assets';

import styles from './dropdown.module.scss';
import useOutsideClick from '@/hooks/useOutsideClick';

type SingleValue = string | number;

type DropdownObj = {
  [key: string]: any;
  id: number;
  name: string;
  label: string;
  value: string;
};

type DropdownItem = SingleValue | DropdownObj;

interface Props<T extends DropdownItem> {
  items: Array<SingleValue | T>;
  itemKey: T extends DropdownObj ? keyof DropdownObj : undefined;
  selectedItem: number;
  onChange: (index: number) => void;
}

const checkItemIsDropdownObj = (items: unknown[]): items is Array<DropdownObj> => {
  return items[0] !== null && typeof items[0] === 'object';
};

const NewDropdown = <T extends DropdownItem>({
  items,
  itemKey,
  selectedItem = 0,
  onChange,
}: Props<T>) => {
  const { ref, isOpen, setIsOpen } = useOutsideClick();
  const [currentText, setCurrentText] = useState('');

  const handleClickDropdownItem = (id: number) => {
    onChange(id);
    setIsOpen((prevState) => !prevState);
  };

  useEffect(() => {
    if(checkItemIsDropdownObj(items)){
      items.find(value => (value as DropdownObj).id === selectedItem)
    }else{

    }
  }, [selectedItem]);

  return (
    <>
      <div className={styles.dropdownWrapper} ref={ref}>
        {currentText}
        <ArrowDown onClick={() => setIsOpen((prevState) => !prevState)} />
        {isOpen && (
          <div className={styles.dropdownItems}>
            {items.map((value) => {
              const text = value !== 'object' ? itemKey && value[itemKey].toString()
              : value.toString();
              return (
                <div
                  key={text}
                  className={cx(
                    styles.item,
                    {[styles.itemSelected] :  }
                  )}
                  onClick={() => handleClickDropdownItem(value.id)}
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
