import { AnchorHTMLAttributes } from 'react';
import cx from 'classnames';

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  className: string;
  current: boolean;
}

const RedirectIcon = ({ className, current, href, children }: Props) => {
  return (
    <a
      href={href}
      aria-current={current && 'page'}
      className={cx('RedirectIcon', className)}
    >
      {children}
    </a>
  );
};

export default RedirectIcon;
