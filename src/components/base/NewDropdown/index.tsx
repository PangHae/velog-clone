import { FC, useEffect, useState } from 'react';
import cx from 'classnames';

import { ArrowDown } from '@/assets';

import styles from './dropdown.module.scss';
import useOutsideClick from '@/hooks/useOutsideClick';

export type SingleValue = string | number;

type DropdownObj = {
  [key: string]: any;
  id: number;
  name: string;
  label: string;
  value: string;
};

type DropdownItem = SingleValue | DropdownObj;

interface Props<T> {
  items: Array<SingleValue | T>;
  itemKey: T extends DropdownObj ? keyof DropdownObj : never;
  selectedItem: SingleValue;
  onChange: (id: SingleValue) => void;
}

interface ContentProps<T extends unknown> {
  text: string;
  value: DropdownItem;
  selected: boolean;
  onClick: (item: DropdownItem) => void;
}

const DropdownContent: FC<ContentProps> = ({
  text,
  value,
  selected,
  onClick,
}) => {
  return (
    <div
      key={text}
      className={cx(styles.item, {
        [styles.itemSelected]: selected,
      })}
      onClick={() => onClick(value)}
    >
      {text}
    </div>
  );
};

const NewDropdown = <T extends unknown>({
  items,
  itemKey,
  selectedItem = 0,
  onChange,
}: Props<T>) => {
  const { ref, isOpen, setIsOpen } = useOutsideClick();
  const [currentText, setCurrentText] = useState<SingleValue>('');

  const checkItemIsDropdownObj = (val: unknown): val is DropdownObj => {
    return val !== null && typeof val === 'object';
  };

  const handleClickDropdownItem = (item: DropdownItem) => {
    if (checkItemIsDropdownObj(item)) {
      onChange(item.id);
      setCurrentText(item[itemKey]);
    } else {
      onChange(item);
      setCurrentText(item);
    }
    setIsOpen((prevState) => !prevState);
  };

  const getCurrentText = (value: DropdownItem) => {
    if (checkItemIsDropdownObj(value)) {
      return value[itemKey];
    }
    return value.toString();
  };

  return (
    <>
      <div className={styles.dropdownWrapper} ref={ref}>
        {currentText}
        <ArrowDown onClick={() => setIsOpen((prevState) => !prevState)} />
        {isOpen && (
          <div className={styles.dropdownItems}>
            {items.map((value) => {
              const text = getCurrentText(value as DropdownItem);
              let selected;
              if (checkItemIsDropdownObj(value)) {
                selected = value.id === selectedItem;
              } else {
                selected = value === selectedItem;
              }
              return (
                <DropdownContent
                  text={text}
                  value={value}
                  selected={selected}
                  onClick={() => handleClickDropdownItem(value)}
                />
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
