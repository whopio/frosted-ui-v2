import * as React from 'react';
import { IconProps } from './types';

export const Paypal32 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M4.15883 25.8832H7.50371C8.0676 25.8832 8.55912 25.4994 8.69589 24.9523L10.0738 19.4408C10.2105 18.8937 10.7021 18.51 11.2659 18.51H12.7642C23.3736 18.51 24.8488 11.913 25.0296 10.7096C25.0484 10.5843 25.0643 10.4621 25.0783 10.3361C25.1999 9.24838 25.4287 3.76359 17.6797 3.76359H9.82027C8.66834 3.76359 7.67096 4.56366 7.42107 5.68816L3.19915 24.6868C3.06271 25.3008 3.5299 25.8832 4.15883 25.8832Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.39612 25.8829L6.86959 28.3839C6.74095 28.995 7.20713 29.5695 7.83154 29.5696L11.7568 29.5697C12.3426 29.5698 12.847 29.1563 12.9619 28.5819L13.7956 24.413C13.9105 23.8386 14.4148 23.4252 15.0006 23.4252H16.4509C27.0085 23.4252 28.5208 15.8875 28.7136 14.4455C28.7347 14.2874 28.7555 14.1325 28.7723 13.9738C28.8686 13.0641 28.9328 9.74181 25.053 8.10426"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Paypal32;
