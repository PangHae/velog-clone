import { ReactComponent as VelogLogo } from '@/assets/velog.svg';
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
        <div className="setting" />
      </div>
    </header>
  );
};

export default Header;
