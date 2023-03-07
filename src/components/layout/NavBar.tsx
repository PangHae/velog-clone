import { ReactElement, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import RedirectIcon from '../base/RedirectIcon';

import { ReactComponent as Trend } from '@/assets/trending.svg';
import { ReactComponent as Recent } from '@/assets/recent.svg';
import { ReactComponent as Kebab } from '@/assets/kebab.svg';

import '@/styles/components/navBar.scss';
import Popover from '../base/Popover';

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

const NavBar = () => {
  const location = useLocation();
  const [currentLoc, setCurrentLoc] = useState('');
  const [isOpen, setIsOpen] = useState(false);

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
      </div>
      <button
        className="options"
        onClick={() => setIsOpen((prevState) => !prevState)}
      >
        <Kebab />
      </button>
      {isOpen && <Popover menuList={kebabItem} />}
    </div>
  );
};

export default NavBar;
