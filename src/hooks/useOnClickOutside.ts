import React from 'react';

interface UseOnClickOutsideProps {
  ref: any;
  handler: (event: any) => void;
}

const useOnClickOutside = (props: UseOnClickOutsideProps): any => {
  const { ref, handler } = props;
  React.useEffect(() => {
    const listener = (event: any) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      return handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
};

export default useOnClickOutside;
