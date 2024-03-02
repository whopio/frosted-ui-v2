import * as React from 'react';
import { IconProps } from './types';

export const Gear32 = React.forwardRef<SVGSVGElement, IconProps>(
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
        <circle
          cx="16"
          cy="16"
          r="4.75"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.7832 4.65897L13.5241 4.77546L12.7832 4.65897ZM12.3816 7.21341L12.6674 7.9068C12.9094 7.80706 13.0818 7.58842 13.1225 7.32991L12.3816 7.21341ZM10.202 8.4739L9.93248 9.17379C10.1769 9.26794 10.4528 9.22773 10.6602 9.06771L10.202 8.4739ZM7.78677 7.54365L7.5172 8.24353L7.78677 7.54365ZM5.01727 8.52263L5.66678 8.89763L5.01727 8.52263ZM4.03302 10.2274L3.3835 9.8524H3.3835L4.03302 10.2274ZM4.56995 13.1153L5.04128 12.532H5.04128L4.56995 13.1153ZM6.58266 14.7415L7.32618 14.8399C7.36048 14.5807 7.25735 14.3224 7.054 14.1581L6.58266 14.7415ZM6.58267 17.2586L7.054 17.8419C7.25736 17.6777 7.36049 17.4193 7.32618 17.1601L6.58267 17.2586ZM4.56997 18.8847L4.09863 18.3013H4.09863L4.56997 18.8847ZM4.03304 21.7726L4.68256 21.3976H4.68256L4.03304 21.7726ZM5.01729 23.4774L4.36777 23.8524H4.36777L5.01729 23.4774ZM7.78679 24.4564L7.51722 23.7565H7.51722L7.78679 24.4564ZM10.2021 23.5261L10.6602 22.9323C10.4528 22.7723 10.1769 22.7321 9.9325 22.8262L10.2021 23.5261ZM12.3816 24.7866L13.1225 24.6701C13.0818 24.4116 12.9094 24.1929 12.6674 24.0932L12.3816 24.7866ZM12.7832 27.341L12.0423 27.4575L12.7832 27.341ZM19.2169 27.341L19.9578 27.4575L19.2169 27.341ZM19.6185 24.7866L19.3326 24.0932C19.0907 24.1929 18.9182 24.4116 18.8776 24.6701L19.6185 24.7866ZM21.798 23.5261L22.0675 22.8263C21.8231 22.7321 21.5472 22.7723 21.3398 22.9323L21.798 23.5261ZM24.2132 24.4564L24.4828 23.7565H24.4828L24.2132 24.4564ZM26.9827 23.4774L27.6322 23.8524L26.9827 23.4774ZM27.9669 21.7726L28.6165 22.1476L27.9669 21.7726ZM27.43 18.8847L26.9587 19.4681L27.43 18.8847ZM25.4174 17.2586L24.6739 17.1602C24.6396 17.4194 24.7427 17.6777 24.9461 17.842L25.4174 17.2586ZM25.4174 14.7414L24.9461 14.158C24.7427 14.3223 24.6396 14.5806 24.6739 14.8398L25.4174 14.7414ZM27.43 13.1153L26.9587 12.5319V12.5319L27.43 13.1153ZM27.967 10.2274L27.3174 10.6024V10.6024L27.967 10.2274ZM26.9827 8.52262L26.3332 8.89762V8.89762L26.9827 8.52262ZM24.2132 7.54364L23.9437 6.84375L24.2132 7.54364ZM21.798 8.47387L21.3399 9.06768C21.5472 9.22769 21.8231 9.2679 22.0675 9.17375L21.798 8.47387ZM19.6185 7.21341L18.8776 7.32991C18.9182 7.58842 19.0907 7.80706 19.3326 7.9068L19.6185 7.21341ZM19.2169 4.65897L18.476 4.77546V4.77546L19.2169 4.65897ZM13.5241 4.77546C13.6396 4.04108 14.2724 3.5 15.0158 3.5V2C13.5339 2 12.2725 3.07858 12.0423 4.54247L13.5241 4.77546ZM13.1225 7.32991L13.5241 4.77546L12.0423 4.54247L11.6407 7.09692L13.1225 7.32991ZM10.6602 9.06771C11.2707 8.59665 11.9449 8.20466 12.6674 7.9068L12.0957 6.52003C11.2485 6.86932 10.4586 7.32868 9.7439 7.88009L10.6602 9.06771ZM7.5172 8.24353L9.93248 9.17379L10.4716 7.77402L8.05633 6.84377L7.5172 8.24353ZM5.66678 8.89763C6.03849 8.25383 6.82348 7.97634 7.5172 8.24353L8.05633 6.84377C6.67347 6.31115 5.10869 6.86429 4.36775 8.14763L5.66678 8.89763ZM4.68254 10.6024L5.66678 8.89763L4.36775 8.14763L3.3835 9.8524L4.68254 10.6024ZM5.04128 12.532C4.46303 12.0648 4.31084 11.2462 4.68254 10.6024L3.3835 9.8524C2.64256 11.1357 2.94593 12.7675 4.09861 13.6987L5.04128 12.532ZM7.054 14.1581L5.04128 12.532L4.09861 13.6987L6.11133 15.3249L7.054 14.1581ZM7.25004 16C7.25004 15.6063 7.27599 15.2191 7.32618 14.8399L5.83915 14.6431C5.78034 15.0874 5.75004 15.5403 5.75004 16H7.25004ZM7.32618 17.1601C7.27599 16.7809 7.25004 16.3937 7.25004 16H5.75004C5.75004 16.4597 5.78034 16.9127 5.83915 17.357L7.32618 17.1601ZM5.0413 19.4681L7.054 17.8419L6.11133 16.6752L4.09863 18.3013L5.0413 19.4681ZM4.68256 21.3976C4.31086 20.7538 4.46305 19.9352 5.0413 19.4681L4.09863 18.3013C2.94595 19.2326 2.64258 20.8643 3.38352 22.1476L4.68256 21.3976ZM5.6668 23.1024L4.68256 21.3976L3.38352 22.1476L4.36777 23.8524L5.6668 23.1024ZM7.51722 23.7565C6.8235 24.0237 6.0385 23.7462 5.6668 23.1024L4.36777 23.8524C5.10871 25.1357 6.67349 25.6889 8.05635 25.1562L7.51722 23.7565ZM9.9325 22.8262L7.51722 23.7565L8.05635 25.1562L10.4716 24.226L9.9325 22.8262ZM12.6674 24.0932C11.9449 23.7953 11.2708 23.4034 10.6602 22.9323L9.74392 24.1199C10.4586 24.6713 11.2485 25.1307 12.0957 25.48L12.6674 24.0932ZM13.5241 27.2245L13.1225 24.6701L11.6407 24.9031L12.0423 27.4575L13.5241 27.2245ZM15.0158 28.5C14.2724 28.5 13.6396 27.9589 13.5241 27.2245L12.0423 27.4575C12.2725 28.9214 13.5339 30 15.0158 30V28.5ZM16.9843 28.5H15.0158V30H16.9843V28.5ZM18.476 27.2245C18.3605 27.9589 17.7277 28.5 16.9843 28.5V30C18.4662 30 19.7276 28.9214 19.9578 27.4575L18.476 27.2245ZM18.8776 24.6701L18.476 27.2245L19.9578 27.4575L20.3594 24.9031L18.8776 24.6701ZM21.3398 22.9323C20.7293 23.4034 20.0551 23.7954 19.3326 24.0932L19.9044 25.48C20.7516 25.1307 21.5414 24.6713 22.2561 24.12L21.3398 22.9323ZM24.4828 23.7565L22.0675 22.8263L21.5284 24.226L23.9436 25.1563L24.4828 23.7565ZM26.3332 23.1024C25.9615 23.7462 25.1765 24.0237 24.4828 23.7565L23.9436 25.1563C25.3265 25.6889 26.8913 25.1357 27.6322 23.8524L26.3332 23.1024ZM27.3174 21.3976L26.3332 23.1024L27.6322 23.8524L28.6165 22.1476L27.3174 21.3976ZM26.9587 19.4681C27.5369 19.9353 27.6891 20.7538 27.3174 21.3976L28.6165 22.1476C29.3574 20.8643 29.054 19.2326 27.9013 18.3013L26.9587 19.4681ZM24.9461 17.842L26.9587 19.4681L27.9013 18.3013L25.8887 16.6752L24.9461 17.842ZM24.75 16C24.75 16.3937 24.7241 16.781 24.6739 17.1602L26.1609 17.3571C26.2197 16.9127 26.25 16.4597 26.25 16H24.75ZM24.6739 14.8398C24.7241 15.2191 24.75 15.6063 24.75 16H26.25C26.25 15.5403 26.2197 15.0873 26.1609 14.643L24.6739 14.8398ZM26.9587 12.5319L24.9461 14.158L25.8887 15.3248L27.9014 13.6987L26.9587 12.5319ZM27.3174 10.6024C27.6891 11.2462 27.537 12.0648 26.9587 12.5319L27.9014 13.6987C29.0541 12.7674 29.3574 11.1357 28.6165 9.85238L27.3174 10.6024ZM26.3332 8.89762L27.3174 10.6024L28.6165 9.85238L27.6322 8.14762L26.3332 8.89762ZM24.4828 8.24352C25.1765 7.97633 25.9615 8.25381 26.3332 8.89762L27.6322 8.14762C26.8913 6.86427 25.3265 6.31114 23.9437 6.84375L24.4828 8.24352ZM22.0675 9.17375L24.4828 8.24352L23.9437 6.84375L21.5284 7.77399L22.0675 9.17375ZM19.3326 7.9068C20.0551 8.20465 20.7293 8.59663 21.3399 9.06768L22.2561 7.88006C21.5414 7.32866 20.7516 6.86931 19.9044 6.52003L19.3326 7.9068ZM18.476 4.77546L18.8776 7.32991L20.3594 7.09692L19.9578 4.54247L18.476 4.77546ZM16.9843 3.5C17.7277 3.5 18.3605 4.04108 18.476 4.77546L19.9578 4.54247C19.7276 3.07858 18.4662 2 16.9843 2V3.5ZM15.0158 3.5H16.9843V2H15.0158V3.5Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default Gear32;
