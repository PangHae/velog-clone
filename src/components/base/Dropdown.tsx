import { Dispatch, FC, MouseEvent, SetStateAction } from 'react';
import useOutsideClick from '@/hooks/useOutsideClick';

import { ReactComponent as ArrowDown } from '@/assets/arrowDown.svg';

interface Props {
  dropdownItem: string[];
  current: string;
  setCurrent: Dispatch<SetStateAction<string>>;
}

const Dropdown: FC<Props> = ({ dropdownItem, current, setCurrent }) => {
  const { ref, isOpen, setIsOpen } = useOutsideClick();

  const handleClickDropdownItem = (e: MouseEvent<HTMLLIElement>) => {
    const { target } = e;
    setCurrent((target as HTMLLIElement).innerText);
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <div
        ref={ref}
        className="dropdown-main"
        onClick={() => setIsOpen((prevState) => !prevState)}
      >
        {current}
        <ArrowDown />
      </div>
      {isOpen && (
        <div className="dropdown">
          <div>
            <div className="dropdown-inner">
              <ul>
                {dropdownItem.map((value) => (
                  <li
                    key={value}
                    className={current === value ? 'active' : ''}
                    onClick={handleClickDropdownItem}
                  >
                    {value}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Dropdown;
