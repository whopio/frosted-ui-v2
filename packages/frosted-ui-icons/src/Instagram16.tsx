import * as React from 'react';
import { IconProps } from './types';

export const Instagram16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8.5 4.60547C10.2227 4.60547 11.6445 6.02734 11.6445 7.75C11.6445 9.5 10.2227 10.8945 8.5 10.8945C6.75 10.8945 5.35547 9.5 5.35547 7.75C5.35547 6.02734 6.75 4.60547 8.5 4.60547ZM8.5 9.80078C9.62109 9.80078 10.5234 8.89844 10.5234 7.75C10.5234 6.62891 9.62109 5.72656 8.5 5.72656C7.35156 5.72656 6.44922 6.62891 6.44922 7.75C6.44922 8.89844 7.37891 9.80078 8.5 9.80078ZM12.4922 4.49609C12.4922 4.08594 12.1641 3.75781 11.7539 3.75781C11.3438 3.75781 11.0156 4.08594 11.0156 4.49609C11.0156 4.90625 11.3438 5.23438 11.7539 5.23438C12.1641 5.23438 12.4922 4.90625 12.4922 4.49609ZM14.5703 5.23438C14.625 6.24609 14.625 9.28125 14.5703 10.293C14.5156 11.2773 14.2969 12.125 13.5859 12.8633C12.875 13.5742 12 13.793 11.0156 13.8477C10.0039 13.9023 6.96875 13.9023 5.95703 13.8477C4.97266 13.793 4.125 13.5742 3.38672 12.8633C2.67578 12.125 2.45703 11.2773 2.40234 10.293C2.34766 9.28125 2.34766 6.24609 2.40234 5.23438C2.45703 4.25 2.67578 3.375 3.38672 2.66406C4.125 1.95312 4.97266 1.73438 5.95703 1.67969C6.96875 1.625 10.0039 1.625 11.0156 1.67969C12 1.73438 12.875 1.95312 13.5859 2.66406C14.2969 3.375 14.5156 4.25 14.5703 5.23438ZM13.2578 11.3594C13.5859 10.5664 13.5039 8.65234 13.5039 7.75C13.5039 6.875 13.5859 4.96094 13.2578 4.14062C13.0391 3.62109 12.6289 3.18359 12.1094 2.99219C11.2891 2.66406 9.375 2.74609 8.5 2.74609C7.59766 2.74609 5.68359 2.66406 4.89062 2.99219C4.34375 3.21094 3.93359 3.62109 3.71484 4.14062C3.38672 4.96094 3.46875 6.875 3.46875 7.75C3.46875 8.65234 3.38672 10.5664 3.71484 11.3594C3.93359 11.9062 4.34375 12.3164 4.89062 12.5352C5.68359 12.8633 7.59766 12.7812 8.5 12.7812C9.375 12.7812 11.2891 12.8633 12.1094 12.5352C12.6289 12.3164 13.0664 11.9062 13.2578 11.3594Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default Instagram16;