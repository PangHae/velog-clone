import { ReactComponent as VelogLogo } from '@/assets/velog.svg';
import { ReactComponent as DarkLogo } from '@/assets/dark.svg';
import { ReactComponent as Search } from '@/assets/search.svg';
import Button from '../Button';
import '@/styles/components/header.scss';

const Header = () => {
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
          <Button className="login-button" value="로그인">
            로그인
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
