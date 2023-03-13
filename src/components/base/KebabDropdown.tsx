import { FC } from 'react';
import { KebabItem } from '@/components/layout/NavBar';
import useOutsideClick from '@/hooks/useOutsideClick';

import { ReactComponent as Kebab } from '@/assets/kebab.svg';

import '@/styles/components/dropdown.scss';

interface Props {
  menuList: KebabItem[];
}

const KebabDropdown: FC<Props> = ({ menuList }) => {
  const { ref, isOpen, setIsOpen } = useOutsideClick();

  return (
    <>
      <div
        ref={ref}
        className="options"
        onClick={() => setIsOpen((prevState) => !prevState)}
      >
        <Kebab />
      </div>
      {isOpen && (
        <div className="kebab-dropdown">
          <div>
            <div className="dropdown-inner">
              <ul>
                {menuList.map((value) => (
                  <li key={value.name}>
                    <a href={value.href}>{value.name}</a>
                  </li>
                ))}
              </ul>
              <div className="contact">
                <h5>문의</h5>
                <div className="email">contact@velog.io</div>
              </div>
              <div className="powered">
                <a href="https://graphcdn.io/?ref=powered-by">
                  <img
                    src="https://graphcdn.io/badge-light.svg"
                    alt="Powered by GraphCDN, the GraphQL CDN"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default KebabDropdown;
