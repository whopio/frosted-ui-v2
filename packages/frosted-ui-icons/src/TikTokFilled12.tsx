import * as React from 'react';
import { IconProps } from './types';

export const TikTokFilled12 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M10.875 5.35156H10.8555C9.95703 5.35156 9.13672 5.07812 8.47266 4.58984V8.08594C8.47266 9.84375 7.04688 11.25 5.28906 11.25C3.53125 11.25 2.125 9.84375 2.125 8.08594C2.125 6.32812 3.53125 4.90234 5.28906 4.90234C5.44531 4.90234 5.58203 4.92188 5.73828 4.94141V6.69922C5.58203 6.64062 5.44531 6.62109 5.28906 6.62109C4.48828 6.62109 3.82422 7.28516 3.82422 8.08594C3.82422 8.88672 4.48828 9.55078 5.28906 9.55078C6.08984 9.55078 6.75391 8.88672 6.75391 8.08594V1.25H8.47266C8.47266 1.26953 8.47266 1.26953 8.47266 1.28906C8.47266 1.42578 8.47266 1.5625 8.51172 1.69922C8.62891 2.34375 9.01953 2.91016 9.56641 3.26172C9.9375 3.51562 10.3867 3.65234 10.8555 3.65234C10.8555 3.65234 10.8555 3.65234 10.875 3.65234V5.35156Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default TikTokFilled12;