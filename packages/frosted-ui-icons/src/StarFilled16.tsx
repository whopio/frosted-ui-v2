import * as React from 'react';
import { IconProps } from './types';

export const StarFilled16 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M7.5434 1.45312C7.72693 1.07117 8.27307 1.07117 8.4566 1.45312L10.0356 4.73976C10.1095 4.89354 10.2565 4.9997 10.4262 5.02192L14.0593 5.49757C14.4817 5.55288 14.6507 6.07139 14.3413 6.36307L11.6852 8.86726C11.5606 8.98479 11.5043 9.15712 11.5356 9.32512L12.2026 12.9029C12.2803 13.3195 11.8383 13.6397 11.4641 13.438L8.24093 11.7006C8.0906 11.6196 7.9094 11.6196 7.75907 11.7006L4.53595 13.438C4.16171 13.6397 3.7197 13.3195 3.79737 12.9029L4.46441 9.32512C4.49573 9.15712 4.43941 8.98479 4.31479 8.86726L1.65871 6.36307C1.34933 6.07139 1.51829 5.55288 1.94071 5.49757L5.57379 5.02192C5.74354 4.9997 5.89049 4.89354 5.96437 4.73976L7.5434 1.45312Z"
          fill={color}
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default StarFilled16;
