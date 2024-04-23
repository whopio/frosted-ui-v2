import * as React from 'react';
import { IconProps } from './types';

export const ReplyFilled24 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M10.6365 2.91658V6.93603C10.6365 7.06927 10.7451 7.17694 10.8784 7.17668C15.893 7.16703 20.8843 8.03711 22.4322 11.9556C24.005 15.9371 20.0731 20.7149 19.2867 21.5112C18.5003 22.3075 19.2867 17.5297 17.714 15.9371C16.1815 14.3853 13.9025 14.3456 10.8769 14.3445C10.7443 14.3445 10.6365 14.452 10.6365 14.5845V17.8095C10.6365 18.0136 10.3978 18.1246 10.2418 17.9929L1.41738 10.5464C1.30375 10.4506 1.30375 10.2755 1.41737 10.1796L10.2418 2.73316C10.3978 2.60148 10.6365 2.7124 10.6365 2.91658Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default ReplyFilled24;