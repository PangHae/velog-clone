import { Dispatch, forwardRef, SetStateAction } from 'react';
import { createPortal } from 'react-dom';
import CSSTransition from 'react-transition-group/CSSTransition';

import { Close } from '@/assets';

import styles from './portalModal.module.scss';

interface Props {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  timeout: number;
}

const portal = document.getElementById('portal') as HTMLDivElement;

const PortalModal = forwardRef<HTMLDivElement, Props>(
  ({ isOpen, setIsOpen, timeout }, ref) => {
    const handleClickClose = () => {
      setIsOpen((prevState) => !prevState);
    };

    return createPortal(
      <CSSTransition in={!isOpen} nodeRef={ref} timeout={timeout}>
        <div ref={ref}>
          <div className={styles.modalHeader}>
            <button onClick={handleClickClose}>
              <Close />
            </button>
          </div>
        </div>
      </CSSTransition>,
      portal
    );
  }
);

export default PortalModal;
