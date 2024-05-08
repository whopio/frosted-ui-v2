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
          d="M13.6369 12.005L13.6368 12.0049C13.4938 12.3757 13.2748 12.7125 12.9937 12.9936 12.9936 12.9936 12.9935 12.9937 12.9935 12.9937M13.6369 12.005L11.7349 12.9372C12.0081 12.8318 12.2562 12.6704 12.4632 12.4633L12.9935 12.9937M13.6369 12.005L13.6404 11.9956C13.8082 11.5427 13.8977 11.0645 13.9051 10.5816 13.9359 9.90561 13.9422 9.68425 13.9422 8.00004 13.9422 6.31586 13.9359 6.09444 13.9051 5.41853 13.8977 4.93572 13.8083 4.45764 13.6405 4.00477M13.6369 12.005L13.6405 4.00477M12.9935 12.9937C12.7124 13.2748 12.3756 13.4939 12.0049 13.6369L11.9956 13.6405 11.9956 13.6404C11.5426 13.8083 11.0644 13.8978 10.5815 13.9051M12.9935 12.9937L10.5815 13.9051M13.6405 4.00477C13.5014 3.62815 13.2804 3.28717 12.9936 3.00639 12.7128 2.71954 12.3717 2.49856 11.995 2.35946 11.9949 2.35941 11.9947 2.35936 11.9946 2.3593L13.6405 4.00477zM10.5815 13.9051C9.90555 13.936 9.68419 13.9422 7.99998 13.9422 6.31586 13.9422 6.0944 13.936 5.41854 13.9051 4.93545 13.8979 4.45706 13.8084 4.00392 13.6405L10.5815 13.9051zM3.00626 12.9936C2.71946 12.7128 2.49851 12.3718 2.35943 11.9951 2.19165 11.5424 2.10221 11.0643 2.09488 10.5816 2.06404 9.9056 2.0578 9.68423 2.0578 8.00004 2.0578 6.31586 2.06404 6.09445 2.09488 5.41856 2.10221 4.93578 2.19166 4.45775 2.35943 4.00494 2.49851 3.62827 2.71948 3.28723 3.00634 3.0064L3.00626 12.9936zM3.00626 12.9936C3.2868 13.2803 3.62749 13.5012 4.00384 13.6404L3.00626 12.9936zM10.5815 2.09494C9.90554 2.06411 9.68417 2.05786 7.99998 2.05786 6.3158 2.05786 6.09439 2.06411 5.4185 2.09494 4.93554 2.10227 4.45734 2.19179 4.00438 2.35967L10.5815 2.09494zM6.41029 10.379L6.41027 10.379C5.93979 10.0646 5.57306 9.61779 5.35649 9.09496L6.41029 10.379zM6.41029 10.379C6.88079 10.6934 7.43399 10.8613 7.99997 10.8613 8.75883 10.8613 9.48666 10.5598 10.0232 10.0232 10.5598 9.48666 10.8613 8.75883 10.8613 7.99997 10.8613 7.43399 10.6934 6.88079 10.379 6.41029L10.379 6.41027M6.41029 10.379L10.379 6.41027M10.379 6.41027C10.0646 5.93979 9.61779 5.57306 9.09496 5.35649L10.379 6.41027zM5.97671 5.97676C5.57654 6.3769 5.30405 6.88673 5.19365 7.44178L7.44178 5.19365C6.88673 5.30405 6.3769 5.57654 5.97676 5.97671 5.97675 5.97672 5.97674 5.97672 5.97673 5.97673 5.97672 5.97674 5.97672 5.97675 5.97671 5.97676zM5.19365 7.4418C5.08325 7.9968 5.13991 8.57213 5.35648 9.09492L5.19365 7.4418zM9.09492 5.35648C8.57213 5.13991 7.9968 5.08325 7.4418 5.19365L9.09492 5.35648z"
          stroke={color}
          strokeWidth="1.5"
        />
        <path
          d="M10.9586 3.98721C11.0836 3.9037 11.2305 3.85913 11.3809 3.85913C11.5824 3.85913 11.7757 3.9392 11.9183 4.08173C12.0608 4.22426 12.1409 4.41756 12.1409 4.61913C12.1409 4.76944 12.0963 4.91638 12.0127 5.04136C11.9293 5.16634 11.8105 5.26376 11.6717 5.32128C11.5328 5.3788 11.38 5.39385 11.2326 5.36452C11.0851 5.3352 10.9497 5.26282 10.8435 5.15653C10.7371 5.05024 10.6648 4.91482 10.6355 4.7674C10.6061 4.61997 10.6212 4.46716 10.6787 4.32829C10.7362 4.18942 10.8337 4.07072 10.9586 3.98721Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default Instagram16;
