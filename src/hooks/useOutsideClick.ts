import { useEffect, useRef, useState } from 'react';

function useOutsideClick<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleClickOutside = (e: MouseEvent) => {
    if (ref.current && !(ref.current as Element).contains(e.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mouseup', handleClickOutside);
    return () => {
      document.removeEventListener('mouseup', handleClickOutside);
    };
  }, []);

  return { ref, isOpen, setIsOpen };
}

export default useOutsideClick;
