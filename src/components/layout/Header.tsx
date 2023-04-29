import { CSSProperties, FC, useLayoutEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import Button from '../base/Button';

import { ReactComponent as VelogLogo } from '@/assets/velog.svg';
import { ReactComponent as DarkLogo } from '@/assets/dark.svg';
import { ReactComponent as Search } from '@/assets/search.svg';
import { ReactComponent as VelogSmall } from '@/assets/velogSmall.svg';

import '@/styles/components/header.scss';

interface Props {
  style?: CSSProperties;
}

const Header: FC<Props> = ({ style }) => {
  const location = useLocation();
  const [checkIsPersonal, setCheckIsPersonal] = useState(false);

  useLayoutEffect(() => {
    if (location.pathname.includes('@')) {
      setCheckIsPersonal(true);
    } else {
      setCheckIsPersonal(false);
    }
  }, [location]);

  return (
    // 강제로
    <header className="common-header" style={style}>
      <div className="header-nav">
        <div className="logo">
          <a href="/" className={checkIsPersonal ? 'personal' : ''}>
            {checkIsPersonal ? <VelogSmall /> : <VelogLogo />}
          </a>
          {checkIsPersonal && location.state && (
            <a className="user-logo" href={`/@${location.state.userName}`}>
              {location.state.userName}
            </a>
          )}
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
