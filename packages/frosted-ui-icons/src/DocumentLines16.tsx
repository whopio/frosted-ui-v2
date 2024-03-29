import * as React from 'react';
import { IconProps } from './types';

export const DocumentLines16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8.89052 2.22385L9.42085 1.69353L9.42084 1.69351L8.89052 2.22385ZM12.4428 5.77613L11.9125 6.30646L11.9125 6.30648L12.4428 5.77613ZM5.68749 10.5C5.27328 10.5 4.93749 10.8358 4.93749 11.25C4.93749 11.6642 5.27328 12 5.68749 12V10.5ZM10.3125 12C10.7267 12 11.0625 11.6642 11.0625 11.25C11.0625 10.8358 10.7267 10.5 10.3125 10.5V12ZM5.68749 7.76041C5.27328 7.76041 4.93749 8.0962 4.93749 8.51041C4.93749 8.92462 5.27328 9.26041 5.68749 9.26041V7.76041ZM7.99999 9.26041C8.4142 9.26041 8.74999 8.92462 8.74999 8.51041C8.74999 8.0962 8.4142 7.76041 7.99999 7.76041V9.26041ZM7.74999 2.16666V4.83333H9.24999V2.16666H7.74999ZM7.74999 4.83333C7.74999 5.98391 8.6827 6.91666 9.83332 6.91666V5.41666C9.51114 5.41666 9.24999 5.1555 9.24999 4.83333H7.74999ZM9.83332 6.91666H12.5V5.41666H9.83332V6.91666ZM4.49999 2.58333H7.94772V1.08333H4.49999V2.58333ZM7.94772 2.58333C8.1024 2.58333 8.25078 2.64478 8.36021 2.7542L9.42084 1.69351C9.03013 1.30283 8.50025 1.08333 7.94772 1.08333V2.58333ZM8.36019 2.75418L11.9125 6.30646L12.9731 5.24581L9.42085 1.69353L8.36019 2.75418ZM11.9125 6.30648C12.0219 6.41587 12.0833 6.56423 12.0833 6.71893H13.5833C13.5833 6.16641 13.3638 5.6365 12.9731 5.24579L11.9125 6.30648ZM12.0833 6.71893V12.8333H13.5833V6.71893H12.0833ZM12.0833 12.8333C12.0833 13.1555 11.8222 13.4167 11.5 13.4167V14.9167C12.6506 14.9167 13.5833 13.9839 13.5833 12.8333H12.0833ZM11.5 13.4167H4.49999V14.9167H11.5V13.4167ZM4.49999 13.4167C4.17782 13.4167 3.91666 13.1555 3.91666 12.8333H2.41666C2.41666 13.9839 3.3494 14.9167 4.49999 14.9167V13.4167ZM3.91666 12.8333V3.16666H2.41666V12.8333H3.91666ZM3.91666 3.16666C3.91666 2.8445 4.17782 2.58333 4.49999 2.58333V1.08333C3.3494 1.08333 2.41666 2.01607 2.41666 3.16666H3.91666ZM5.68749 12H10.3125V10.5H5.68749V12ZM5.68749 9.26041H7.99999V7.76041H5.68749V9.26041Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default DocumentLines16;