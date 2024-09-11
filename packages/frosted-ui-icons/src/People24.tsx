import * as React from 'react';
import { IconProps } from './types';

export const People24 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M17.7502 19.25H21.4232C22.0046 19.25 22.4684 18.754 22.3707 18.1808C21.8393 15.0624 20.0192 12.75 17.0002 12.75C16.5541 12.75 16.1342 12.8005 15.7408 12.8966M11.2501 7C11.2501 8.79493 9.79498 10.25 8.00005 10.25C6.20513 10.25 4.75005 8.79493 4.75005 7C4.75005 5.20507 6.20513 3.75 8.00005 3.75C9.79498 3.75 11.2501 5.20507 11.2501 7ZM19.7501 7.5C19.7501 9.01878 18.5188 10.25 17.0001 10.25C15.4813 10.25 14.2501 9.01878 14.2501 7.5C14.2501 5.98122 15.4813 4.75 17.0001 4.75C18.5188 4.75 19.7501 5.98122 19.7501 7.5ZM1.87065 19.1808C2.43857 15.4997 4.51722 12.75 8.00005 12.75C11.4829 12.75 13.5615 15.4997 14.1295 19.1808C14.218 19.755 13.7553 20.25 13.1743 20.25H2.82584C2.24483 20.25 1.78206 19.755 1.87065 19.1808Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default People24;
