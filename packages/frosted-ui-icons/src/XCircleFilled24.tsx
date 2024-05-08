import * as React from 'react';
import { IconProps } from './types';

export const XCircleFilled24 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M1 12.0656C1 5.99051 5.92487 1.06564 12 1.06564C18.0751 1.06564 23 5.99051 23 12.0656C23 18.1408 18.0751 23.0656 12 23.0656C5.92487 23.0656 1 18.1408 1 12.0656ZM16.3037 7.6964C16.6942 8.08692 16.6942 8.72009 16.3037 9.11061L13.4143 11.9999L16.3038 14.8894C16.6943 15.2799 16.6943 15.9131 16.3038 16.3036C15.9132 16.6941 15.2801 16.6941 14.8896 16.3036L12.0001 13.4142L9.11067 16.3036C8.72015 16.6941 8.08698 16.6941 7.69646 16.3036C7.30593 15.9131 7.30593 15.2799 7.69646 14.8894L10.5859 11.9999L7.69657 9.11061C7.30604 8.72009 7.30604 8.08692 7.69657 7.6964C8.08709 7.30587 8.72026 7.30587 9.11078 7.6964L12.0001 10.5857L14.8894 7.6964C15.28 7.30587 15.9131 7.30587 16.3037 7.6964Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default XCircleFilled24;
