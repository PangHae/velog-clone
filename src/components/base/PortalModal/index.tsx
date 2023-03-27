import { Dispatch, forwardRef, ReactNode, SetStateAction } from 'react';
import { createPortal } from 'react-dom';
import CSSTransition from 'react-transition-group/CSSTransition';
import cx from 'classnames';

import Button from '../Button';

import { Close } from '@/assets';

import styles from './portalModal.module.scss';

interface Props {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  title: string;
  children: ReactNode;
}

interface TransitionProps extends Props {
  timeout: number;
}

const portal = document.getElementById('portal') as HTMLDivElement;

// without CSSTransition
const PortalModal = forwardRef<HTMLDivElement, Props>(
  ({ isOpen, setIsOpen, title, children }, ref) => {
    const handleClickClose = () => {
      setIsOpen((prevState) => !prevState);
    };

    const styleIsOpen = { [styles.isOpen]: isOpen };

    return createPortal(
      <div className={cx(styles.modalBackGround, styleIsOpen)}>
        <div className={cx(styles.modal)} ref={ref}>
          <div className={styles.modalHeader}>
            <p className={styles.modalTitle}>{title}</p>
            <Button className="modalCloseBtn" onClick={handleClickClose}>
              <Close />
            </Button>
          </div>
          <div className={styles.content}>{children}</div>
        </div>
      </div>,
      portal
    );
  }
);

export default PortalModal;

// with CSSTransition
export const PortalModalTransition = forwardRef<
  HTMLDivElement,
  TransitionProps
>(({ isOpen, setIsOpen, title, timeout, children }, ref) => {
  const handleClickClose = () => {
    setIsOpen((prevState) => !prevState);
  };

  const styleIsOpen = { [styles.isOpen]: isOpen };

  return createPortal(
    <CSSTransition in={isOpen} nodeRef={ref} timeout={timeout}>
      <div className={cx(styles.modalBackGround, styleIsOpen)}>
        <div className={cx(styles.modal)} ref={ref}>
          <div className={styles.modalHeader}>
            <p className={styles.modalTitle}>{title}</p>
            <Button className="modalCloseBtn" onClick={handleClickClose}>
              <Close />
            </Button>
          </div>
          <div className={styles.content}>{children}</div>
        </div>
      </div>
    </CSSTransition>,
    portal
  );
});
