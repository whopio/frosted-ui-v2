import * as React from 'react';
import { IconProps } from './types';

export const EditProfile16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6.75 1.5C5.50736 1.5 4.5 2.50736 4.5 3.75C4.5 4.99264 5.50736 6 6.75 6C7.99264 6 9 4.99264 9 3.75C9 2.50736 7.99264 1.5 6.75 1.5ZM3 3.75C3 1.67893 4.67893 0 6.75 0C8.82107 0 10.5 1.67893 10.5 3.75C10.5 5.82107 8.82107 7.5 6.75 7.5C4.67893 7.5 3 5.82107 3 3.75ZM6.23649 10C3.55354 10 1.5 11.9668 1.5 14.25C1.5 14.6642 1.16421 15 0.75 15C0.335786 15 0 14.6642 0 14.25C0 11.0103 2.85923 8.5 6.23649 8.5C6.82561 8.5 7.39702 8.57542 7.9394 8.71698C8.34019 8.82158 8.58029 9.23129 8.47569 9.63207C8.37109 10.0329 7.96139 10.273 7.5606 10.1684C7.14147 10.059 6.69735 10 6.23649 10ZM15.1367 8.03551C14.2121 7.11096 12.7131 7.11096 11.7886 8.03551L10.9308 8.89331L8.56757 11.2565C8.12602 11.6981 7.84789 12.2768 7.77893 12.8974L7.6809 13.7796C7.57121 14.7668 8.40538 15.601 9.39259 15.4913L10.2748 15.3933C10.8954 15.3243 11.4741 15.0462 11.9157 14.6046L14.2789 12.2414L15.1367 11.3836C16.0613 10.4591 16.0613 8.96007 15.1367 8.03551ZM12.8493 9.09617C13.188 8.75741 13.7373 8.75741 14.076 9.09617C14.4148 9.43494 14.4148 9.98419 14.076 10.323L13.7486 10.6504L12.5218 9.42364L12.8493 9.09617ZM11.4611 10.4843L12.6879 11.7111L10.855 13.544C10.6543 13.7447 10.3913 13.8711 10.1092 13.9025L9.22695 14.0005C9.1951 14.004 9.16819 13.9771 9.17173 13.9453L9.26976 13.063C9.3011 12.7809 9.42752 12.5179 9.62823 12.3172L11.4611 10.4843Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default EditProfile16;