import { ButtonHTMLAttributes, FC } from 'react';
import cx from 'classnames';
import '@/styles/components/button.scss';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const Button: FC<Props> = ({
  type,
  className = '',
  value,
  children,
  ...props
}: Props) => {
  return (
    <button
      type={type || 'button'}
      className={cx(className)}
      value={value}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
