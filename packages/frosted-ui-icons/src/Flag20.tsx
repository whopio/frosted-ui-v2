import * as React from 'react';
import { IconProps } from './types';

export const Flag20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3.95833 12.5694V3.66593C3.95833 3.34885 4.13807 3.0596 4.43239 2.94165C5.06484 2.68821 6.24126 2.29166 7.41071 2.29166C9.12941 2.29166 10.8706 4.00462 12.5892 4.00462C13.3762 4.00462 14.1664 3.82503 14.7918 3.63032C15.3817 3.44669 16.0417 3.87156 16.0417 4.4893V12.0517C16.0417 12.3687 15.8619 12.658 15.5676 12.7759C14.9352 13.0294 13.7587 13.4259 12.5892 13.4259C10.8706 13.4259 9.12941 11.713 7.41071 11.713C5.69204 11.713 3.95833 12.5694 3.95833 12.5694ZM3.95833 12.5694V17.7083"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Flag20;
