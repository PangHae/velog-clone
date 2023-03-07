import { FC } from 'react';
import { KebabItem } from '../layout/NavBar';

interface Props {
  menuList: KebabItem[];
}

const Popover: FC<Props> = ({ menuList }) => {
  return (
    <div className="popover">
      <div>
        <div className="popover-inner">
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
  );
};

export default Popover;
