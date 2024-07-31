import * as React from 'react';
import { IconProps } from './types';

export const DownloadDocumentFilled32 = React.forwardRef<
  SVGSVGElement,
  IconProps
>(({ color = 'currentColor', ...props }, forwardedRef) => {
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
        d="M23.8559 11.5833L17.7499 5.47727V9.66663C17.7499 10.7252 18.608 11.5833 19.6666 11.5833H23.8559ZM8.99992 2.91663C7.11295 2.91663 5.58325 4.44632 5.58325 6.33329V25.6666C5.58325 27.5536 7.11295 29.0833 8.99992 29.0833H22.9999C24.8869 29.0833 26.4166 27.5536 26.4166 25.6666V13.4378C26.4166 12.5317 26.0566 11.6627 25.4158 11.0219L25.4158 11.0219L18.3113 3.91735L18.3113 3.91733C17.6705 3.2766 16.8015 2.91663 15.8954 2.91663H8.99992ZM16.3124 14.75C16.7266 14.75 17.0624 15.0858 17.0624 15.5V21.3621L18.1265 20.2981C18.4194 20.0052 18.8942 20.0052 19.1871 20.2981C19.48 20.591 19.48 21.0658 19.1871 21.3587L17.1265 23.4194C16.6383 23.9075 15.8469 23.9075 15.3587 23.4194L13.4696 21.5303C13.1767 21.2374 13.1767 20.7625 13.4696 20.4696C13.7625 20.1767 14.2374 20.1767 14.5303 20.4696L15.5624 21.5018V15.5C15.5624 15.0858 15.8982 14.75 16.3124 14.75Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
});

export default DownloadDocumentFilled32;
