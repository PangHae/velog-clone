import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import cx from 'classnames';
import styles from './button.module.scss';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  icon?: ReactNode;
}

const Button: FC<Props> = ({
  type,
  className = '',
  value,
  children,
  icon,
  ...props
}: Props) => {
  return (
    <button
      type={type || 'button'}
      className={cx(styles.buttonJSX, { [styles[className]]: !!className })}
      value={value}
      {...props}
    >
      {children}
      {icon}
    </button>
  );
};

export default Button;
