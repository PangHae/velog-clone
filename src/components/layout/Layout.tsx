import { CSSProperties, FC, useEffect, useRef, useState } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '@/components/layout/Header';

const Layout: FC = () => {
  // 현재 스크롤 위치가 어디인지 저장, 리렌더링 발생 x
  const scrollPositionRef = useRef(0);
  // scroll이 윗 방향일 시 true, else false
  const scrollDirectionRef = useRef<'UP' | 'DOWN'>('DOWN');
  const [floatHeaderVisible, setFloatHeaderVisible] = useState(false);
  const [marginTop, setMarginTop] = useState(-100);

  const style: CSSProperties = {
    position: 'fixed',
    top: '0',
    left: '6rem',
    zIndex: 10,
    backgroundColor: 'rgb(19,19,19)',
    marginTop: marginTop < 0 ? marginTop : 0,
  };

  useEffect(() => {
    const handleScrollEvent = () => {
      if (scrollPositionRef.current < window.scrollY) {
        scrollDirectionRef.current = 'DOWN';
        if (marginTop === -100) {
          setFloatHeaderVisible(false);
          // return;
        }
        setMarginTop((prev) =>
          prev - window.scrollY + scrollPositionRef.current > -100
            ? prev - window.scrollY + scrollPositionRef.current
            : -100
        );
      } else {
        scrollDirectionRef.current = 'UP';
        if (scrollPositionRef.current < 64) {
          setFloatHeaderVisible(false);
          setMarginTop(-100);
        } else {
          setFloatHeaderVisible(true);
          setMarginTop((prev) =>
            prev + scrollPositionRef.current - window.scrollY < 0
              ? prev + scrollPositionRef.current - window.scrollY
              : 0
          );
        }
      }
      scrollPositionRef.current = window.scrollY;
    };
    window.addEventListener('scroll', handleScrollEvent);
    return () => window.removeEventListener('scroll', handleScrollEvent);
  }, []);

  return (
    <>
      <Header />
      {floatHeaderVisible && <Header style={style} />}
      <Outlet />
    </>
  );
};

export default Layout;
