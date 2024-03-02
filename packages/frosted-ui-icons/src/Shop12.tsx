import * as React from 'react';
import { IconProps } from './types';

export const Shop12 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3.62614 1.5H2.75861C2.29237 1.5 1.87717 1.79499 1.72373 2.23525L1.55349 2.72373C1.51828 2.82476 1.5 2.93253 1.5 3.04073C1.5 3.57192 1.93148 4 2.45351 4C2.91655 4 3.31266 3.66733 3.39267 3.21126L3.46182 2.81709C3.46535 2.75488 3.47116 2.69229 3.47933 2.62941L3.62614 1.5ZM3.82112 0H2.75861C1.65423 0 0.670748 0.698736 0.307293 1.7416L0.137051 2.23007C0.0463288 2.49038 0 2.76506 0 3.04073C0 3.5987 0.186262 4.11416 0.5 4.52749V9.26286C0.5 10.7745 1.72546 12 3.23714 12H4.25H7.75H8.76286C10.2745 12 11.5 10.7745 11.5 9.26286V4.52749C11.8137 4.11416 12 3.5987 12 3.04073C12 2.76506 11.9537 2.49038 11.8629 2.23007L11.6927 1.7416C11.3293 0.698736 10.3458 0 9.24139 0H8.18077H8.04395H6.52104H5.47896H3.95605H3.82112ZM4.95801 2.96943L5.2158 1.5H6.7842L7.04373 2.97934C7.03293 3.53646 6.57701 4 6.00094 4C5.42146 4 4.96355 3.53095 4.95801 2.96943ZM4.20861 4.76099C3.75981 5.22011 3.13482 5.5 2.45351 5.5C2.29856 5.5 2.14698 5.48556 2 5.45796V9.26286C2 9.94611 2.55389 10.5 3.23714 10.5H3.5V8.13597C3.5 7.50859 4.00859 7 4.63597 7H7.36403C7.99141 7 8.5 7.50859 8.5 8.13597V10.5H8.76286C9.44611 10.5 10 9.94611 10 9.26286V5.45796C9.85302 5.48556 9.70144 5.5 9.54649 5.5C8.86565 5.5 8.24105 5.22049 7.79232 4.76194C7.33525 5.21614 6.70489 5.5 6.00094 5.5C5.29651 5.5 4.66575 5.21574 4.20861 4.76099ZM8.54089 2.83257L8.60733 3.21126C8.68734 3.66733 9.08345 4 9.54649 4C10.0685 4 10.5 3.57192 10.5 3.04073C10.5 2.93253 10.4817 2.82476 10.4465 2.72373L10.2763 2.23525C10.1228 1.79499 9.70763 1.5 9.24139 1.5H8.37575L8.52255 2.62941C8.5314 2.69751 8.53749 2.76527 8.54089 2.83257ZM7 10.5H5V8.5H7V10.5Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default Shop12;
