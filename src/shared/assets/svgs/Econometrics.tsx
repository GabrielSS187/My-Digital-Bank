import { FC } from 'react';

export const Econometrics: FC<{ color?: string }> = ({ color }) => {
  const colorCondition: string = color || '#B1B1B1';
  return (
    <svg
      className="!h-[25px] !w-[25px]"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_147_72)">
        <path
          d="M3.84909 13.3343C4.05021 13.4539 4.22289 13.6097 4.36069 13.7896H6.96482V11.2645L5.73001 10.4989C5.455 10.3284 5.37028 9.96723 5.54077 9.69221C5.7113 9.41728 6.07232 9.33256 6.34745 9.50297L7.5507 10.249L8.59951 9.59875C6.50759 6.73027 6.98802 2.66576 9.77256 0.371683C5.1858 -1.16489 0.374264 2.2508 0.352547 7.15648C0.34122 9.75807 1.72629 12.0705 3.84909 13.3343Z"
          fill={colorCondition}
        />
        <path
          d="M4.72711 14.9614H10.2735V16.2894H4.72711V14.9614Z"
          fill={colorCondition}
        />
        <path
          d="M8.13654 11.2646V13.7897H10.632C10.7645 13.6149 10.9298 13.4651 11.1222 13.3518C11.6547 13.0384 12.1435 12.656 12.5768 12.2185C11.3529 11.9429 10.2538 11.3343 9.37978 10.4932C9.34646 10.5148 9.10629 10.6633 8.13654 11.2646Z"
          fill={colorCondition}
        />
        <path
          d="M14.0622 0.00195312C10.9899 0.00195312 8.47675 2.54066 8.47675 5.62642C8.47675 8.52896 10.7049 10.9324 13.5618 11.1889C16.868 11.4843 19.6476 8.8635 19.6476 5.62642C19.6476 2.54663 17.142 0.00195312 14.0622 0.00195312ZM14.6488 8.16587V8.28832C14.6488 8.61188 14.3865 8.8742 14.0629 8.8742C13.7394 8.8742 13.4771 8.61188 13.4771 8.28832V8.23211C13.2071 8.18477 12.9605 8.08377 12.6489 7.87992C12.3781 7.70279 12.3022 7.3397 12.4794 7.0689C12.6565 6.79807 13.0196 6.72222 13.2904 6.89931C13.576 7.08617 13.6685 7.10074 14.059 7.09804C14.4359 7.09554 14.5861 6.79967 14.6154 6.62527C14.6417 6.46869 14.6121 6.2605 14.3218 6.1579C13.8353 5.98592 13.3365 5.78859 12.9832 5.51143C12.1785 4.88032 12.4214 3.43886 13.4771 3.05526V2.97042C13.4771 2.64686 13.7394 2.38454 14.063 2.38454C14.3865 2.38454 14.6489 2.64686 14.6489 2.97042V3.00292C14.9375 3.0844 15.17 3.23177 15.3297 3.39417C15.5566 3.62485 15.5535 3.9958 15.3228 4.22269C15.0922 4.44946 14.7216 4.44646 14.4947 4.21617C14.462 4.18425 14.2815 4.03376 13.8908 4.15144C13.7348 4.19843 13.6929 4.36021 13.6837 4.40869C13.6647 4.50985 13.6918 4.57804 13.7063 4.58945C13.9273 4.76279 14.3389 4.9211 14.7123 5.05312C16.2565 5.59892 16.0684 7.65268 14.6488 8.16587Z"
          fill={colorCondition}
        />
        <path
          d="M5.66449 18.1642C5.66449 19.1765 6.48801 20 7.50026 20C8.5125 20 9.33602 19.1765 9.33602 18.1642V17.4612H5.66449V18.1642Z"
          fill={colorCondition}
        />
      </g>
      <defs>
        <clipPath id="clip0_147_72">
          <rect width="25" height="25" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
