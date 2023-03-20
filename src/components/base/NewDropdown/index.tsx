import { FC } from 'react';
import styles from './dropdown.module.scss';

type DropdownObj = {
  id: number;
  name: string;
  value: string;
  label: string;
};

interface Props {
  items: Array<string | number | DropdownObj>;
  itemKey?: keyof DropdownObj;
  // selectedItem?: number;
}

// items의 값이 string 혹은 number일 시, selectedItem은 인덱스,
const NewDropdown: FC<Props> = ({ items, itemKey }) => {
  // const [currentItem, setCurrentItem] = useState<string | number | DropdownObj>(
  //   ''
  // );

  return (
    <div className={styles.dropdownWrapper}>
      <div>
        {items.map((value) => (
          <div>{value.toString()}</div>
        ))}
      </div>
      <div>{`itemKey : ${itemKey}`}</div>
    </div>
  );
};

export default NewDropdown;
