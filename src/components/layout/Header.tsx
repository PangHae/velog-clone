import { FC } from 'react';

import Button from '../base/Button';

import { ReactComponent as VelogLogo } from '@/assets/velog.svg';
import { ReactComponent as DarkLogo } from '@/assets/dark.svg';
import { ReactComponent as Search } from '@/assets/search.svg';

import '@/styles/components/header.scss';

const Header: FC<{}> = () => {
  return (
    <header className="common-header">
      <div className="header-nav">
        <div className="logo">
          <a href="/">
            <VelogLogo />
          </a>
        </div>
        <div className="setting">
          <Button className="dark-button">
            <div className="icon-wrapper">
              <div className="dark">
                <DarkLogo />
              </div>
            </div>
          </Button>
          <a className="search" href="/search">
            <Search />
          </a>
          <Button className="login-button" value="login">
            로그인
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
