import { FC, ReactElement, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import RedirectIcon from '../base/RedirectIcon';
import KebabDropdown from '../composite/dropdown/KebabDropdown';
import useOutsideClick from '@/hooks/useOutsideClick';

import { ReactComponent as Trend } from '@/assets/trending.svg';
import { ReactComponent as Recent } from '@/assets/recent.svg';
import { ReactComponent as Kebab } from '@/assets/kebab.svg';

import '@/styles/components/navBar.scss';
import Dropdown from '../base/Dropdown';

type Tab = {
  icon: ReactElement;
  name: string;
  href: string;
};

export type KebabItem = Omit<Tab, 'icon'>;

const tabItems: Tab[] = [
  {
    icon: <Trend />,
    name: '트렌딩',
    href: '/',
  },
  {
    icon: <Recent />,
    name: '최신',
    href: '/recent',
  },
];

const kebabItem: KebabItem[] = [
  {
    name: '공지사항',
    href: '/@velog',
  },
  {
    name: '태그 목록',
    href: '/tags',
  },
  {
    name: '서비스 정책',
    href: '/policy/terms',
  },
  {
    name: 'Slack',
    href: 'https://bit.ly/velog-slack',
  },
];

const dropdownItem = ['오늘', '이번 주', '이번 달', '올해'];

const NavBar: FC<{}> = () => {
  const location = useLocation();
  const [currentLoc, setCurrentLoc] = useState('');
  const [selectedFilter, setSelectedFilter] = useState(dropdownItem[1]);
  const { ref, isOpen, setIsOpen } = useOutsideClick();

  useEffect(() => {
    if (location.pathname) {
      setCurrentLoc(location.pathname);
    }
  }, [location]);

  return (
    <div className="article-nav">
      <div className="filter">
        <div className="anchor">
          {tabItems.map((value) => (
            <RedirectIcon
              className={currentLoc === value.href ? 'active' : ''}
              current={currentLoc === value.href}
              href={value.href}
            >
              <>
                {value.icon}
                {value.name}
              </>
            </RedirectIcon>
          ))}
          <div className="underline" />
        </div>
        <Dropdown
          dropdownItem={dropdownItem}
          current={selectedFilter}
          setCurrent={setSelectedFilter}
        />
      </div>
      <div
        ref={ref}
        className="options"
        onClick={() => setIsOpen((prevState) => !prevState)}
      >
        <Kebab />
      </div>
      {isOpen && <KebabDropdown menuList={kebabItem} />}
    </div>
  );
};

export default NavBar;
