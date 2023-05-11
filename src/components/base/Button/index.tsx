import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import cx from 'classnames';
import styles from './button.module.scss';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * 클래스 이름을 입력하세요.
   */
  className?: string;
  /**
   * 아이콘이 사용되는 Button일 시 입력하세요.
   */
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
