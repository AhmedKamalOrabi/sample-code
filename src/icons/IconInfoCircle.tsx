import React from 'react';

import Icon from '../components/Icon';

interface IconInfoCircleProps {
  size?: string;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const IconInfoCircle: React.FC<IconInfoCircleProps> = (props: any) => (
  <Icon
    viewBox="0 0 24 24"
    content={
      <path d="M12 3.5A8.5 8.5 0 1 1 3.5 12 8.51 8.51 0 0 1 12 3.5M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm.75 15v-6a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.5 0zM12 6a1 1 0 1 0 1 1 1 1 0 0 0-1-1z" />
    }
    {...props}
  />
);

IconInfoCircle.displayName = 'IconInfoCircle';

export default IconInfoCircle;
