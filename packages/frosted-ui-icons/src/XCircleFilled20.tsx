import * as React from 'react';
import { IconProps } from './types';

export const XCircleFilled20 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M1 10.0656C1 5.09508 5.02944 1.06564 10 1.06564C14.9706 1.06564 19 5.09508 19 10.0656C19 15.0362 14.9706 19.0656 10 19.0656C5.02944 19.0656 1 15.0362 1 10.0656ZM13.7805 6.21968C14.0734 6.51257 14.0734 6.98744 13.7805 7.28034L11.0609 9.99988L13.7807 12.7197C14.0736 13.0126 14.0736 13.4874 13.7807 13.7803C13.4879 14.0732 13.013 14.0732 12.7201 13.7804L10.0002 11.0605L7.28032 13.7804C6.98743 14.0732 6.51256 14.0732 6.21966 13.7803C5.92677 13.4874 5.92678 13.0126 6.21968 12.7197L8.93953 9.99988L6.21994 7.28034C5.92704 6.98744 5.92704 6.51257 6.21993 6.21968C6.51282 5.92678 6.98769 5.92677 7.28059 6.21966L10.0002 8.93923L12.7198 6.21966C13.0127 5.92677 13.4876 5.92678 13.7805 6.21968Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default XCircleFilled20;
