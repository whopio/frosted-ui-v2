import * as React from 'react';
import { IconProps } from './types';

export const Shop20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4.74648 3H6.75029L6.08728 6.72438C5.90439 7.75171 5.01113 8.5 3.96765 8.5C2.78113 8.5 1.81551 7.53529 1.8147 6.34488C1.8145 6.05979 1.87081 5.77709 1.98003 5.51441L2.36476 4.5891C2.76481 3.62695 3.70448 3 4.74648 3ZM4.74648 1.5H6.97531H7.01732H8.5409H11.4591H12.9827H13.0279H15.2535C16.9015 1.5 18.3876 2.49154 19.0203 4.01321L19.405 4.93853C19.5904 5.38431 19.6856 5.86312 19.6853 6.3459C19.6845 7.5284 19.1219 8.58061 18.25 9.24869V15.6338C18.25 17.769 16.519 19.5 14.3838 19.5H5.61618C3.48094 19.5 1.74999 17.769 1.74999 15.6338V9.24869C0.878115 8.58061 0.315507 7.5284 0.314697 6.3459C0.314368 5.86312 0.409626 5.38431 0.594979 4.93853L0.979716 4.01321C1.61241 2.49154 3.09852 1.5 4.74648 1.5ZM13.2568 3.03978L13.2509 3H15.2535C16.2955 3 17.2352 3.62695 17.6352 4.5891L18.02 5.51441C18.1292 5.77709 18.1855 6.05979 18.1853 6.34488C18.1845 7.53529 17.2188 8.5 16.0323 8.5C14.9888 8.5 14.0956 7.75171 13.9127 6.72438L13.2568 3.03978ZM11.7261 3H8.27387L8.2436 3.17004L7.82638 5.9776C7.62892 7.30629 8.65835 8.5 10.0016 8.5C11.3449 8.5 12.3743 7.30629 12.1769 5.9776L11.7762 3.28151L11.7261 3ZM6.9727 8.42464C7.63727 9.37073 8.73672 10 10.0016 10C11.2655 10 12.3642 9.37177 13.0289 8.42698C13.6941 9.38652 14.8016 10 16.0323 10C16.278 10 16.5179 9.9757 16.75 9.92938V15.6338C16.75 16.9406 15.6906 18 14.3838 18H13.5V13.8553C13.5 13.1068 12.8932 12.5 12.1447 12.5H7.85525C7.10676 12.5 6.49999 13.1068 6.49999 13.8553V18H5.61618C4.30937 18 3.24999 16.9406 3.24999 15.6338V9.92938C3.48204 9.9757 3.72202 10 3.96765 10C5.19936 10 6.30771 9.38552 6.9727 8.42464ZM12 18H7.99999V14H12V18Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default Shop20;
