import * as React from 'react';
import { IconProps } from './types';

export const Photos32 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M25.625 27C26.0625 27 26.5 27.4375 26.5 27.875C26.5 28.3672 26.0625 28.75 25.625 28.75H5.5C2.54688 28.75 0.25 26.4531 0.25 23.5V8.625C0.25 8.1875 0.632812 7.75 1.125 7.75C1.5625 7.75 2 8.1875 2 8.625V23.5C2 25.4688 3.53125 27 5.5 27H25.625ZM12.5 10.8125C11.7344 10.8125 11.1875 10.2656 11.1875 9.5C11.1875 8.78906 11.7344 8.1875 12.5 8.1875C13.2109 8.1875 13.8125 8.78906 13.8125 9.5C13.8125 10.2656 13.2109 10.8125 12.5 10.8125ZM22.6719 10.1562L27.9219 17.4844C28.3047 18.0312 28.3047 18.6875 28.0312 19.1797C27.7031 19.7266 27.1562 20 26.5547 20H12.3906C11.7891 20 11.1875 19.6719 10.9141 19.1797C10.6406 18.6328 10.6953 17.9219 11.0781 17.4297L14.5781 13.0547C15.1797 12.2344 16.6016 12.2344 17.2031 13.0547L17.5859 13.5469L19.9922 10.1562C20.5938 9.28125 22.0703 9.33594 22.6719 10.1562ZM12.6094 18.25H26.3359L21.25 11.1953L18.2969 15.5156C17.8594 16.1172 17.0938 15.8438 16.875 15.5156L15.7812 14.1484L12.6094 18.25ZM28.25 4.25C30.1641 4.25 31.75 5.83594 31.75 7.75V20C31.75 21.9688 30.1641 23.5 28.25 23.5H9C7.03125 23.5 5.5 21.9688 5.5 20V7.75C5.5 5.83594 7.03125 4.25 9 4.25H28.25ZM30 20V7.75C30 6.82031 29.1797 6 28.25 6H9C8.01562 6 7.25 6.82031 7.25 7.75V20C7.25 20.9844 8.01562 21.75 9 21.75H28.25C29.1797 21.75 30 20.9844 30 20Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default Photos32;