import * as React from 'react';
import { IconProps } from './types';

export const Store20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5.02395 2.5H6.60609L6.03009 6.7492C5.89415 7.75202 5.03793 8.5 4.02594 8.5C2.59512 8.5 1.61673 7.05489 2.14813 5.7264L2.84994 3.97188C3.20552 3.08291 4.06651 2.5 5.02395 2.5ZM5.02395 1H6.80942H6.82314H8.32314H11.3231H12.8231H12.8369H14.6223C16.1931 1 17.6057 1.95634 18.1891 3.41479L18.8909 5.16932C19.469 6.61459 19.0211 8.13911 17.9961 9.07997C17.9986 9.10505 17.9999 9.1305 17.9999 9.15625V15.25C17.9999 17.3211 16.321 19 14.2499 19H5.24994C3.17887 19 1.49994 17.3211 1.49994 15.25V9C1.49994 8.97858 1.50083 8.95736 1.5026 8.9364C0.583429 7.98873 0.205852 6.54322 0.755412 5.16932L1.45722 3.41479C2.0406 1.95634 3.45315 1 5.02395 1ZM16.4999 9.89102C16.2209 9.96199 15.9266 10 15.6203 10C14.4493 10 13.3981 9.42495 12.7549 8.52675C12.0928 9.41575 11.0336 10 9.82313 10C8.61269 10 7.55342 9.41576 6.89138 8.52677C6.24821 9.42496 5.19696 10 4.02594 10C3.66561 10 3.32175 9.94738 2.99994 9.85036V15.25C2.99994 16.4926 4.0073 17.5 5.24994 17.5H6.5V14H5.57324C5.15903 14 4.82324 13.6642 4.82324 13.25C4.82324 12.8358 5.15903 12.5 5.57324 12.5H7.25H12.25H14.0732C14.4875 12.5 14.8232 12.8358 14.8232 13.25C14.8232 13.6642 14.4875 14 14.0732 14H13V17.5H14.2499C15.4926 17.5 16.4999 16.4926 16.4999 15.25V9.89102ZM11.5 17.5H8V14H11.5V17.5ZM8.14367 2.5L7.68703 6.07359C7.52255 7.36079 8.52546 8.5 9.82313 8.5C11.1208 8.5 12.1237 7.3608 11.9592 6.0736L11.5026 2.5H8.14367ZM13.6162 6.7492L13.0402 2.5H14.6223C15.5798 2.5 16.4408 3.08291 16.7963 3.97188L17.4982 5.7264C18.0295 7.05489 17.0512 8.5 15.6203 8.5C14.6083 8.5 13.7521 7.75202 13.6162 6.7492Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default Store20;