import { FC } from 'react';

export const EconomicInvestment: FC<{ color?: string }> = ({ color }) => {
  const colorCondition: string = color ?? 'fill-[#B1B1B1]';
  return (
    <svg
      className={`!h-[25px] !w-[25px] ${colorCondition}`}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_147_37)">
        <path
          d="M3.1366 8.18164H0.909362C0.407234 8.18164 0 8.58888 0 9.091V19.091C0 19.5927 0.407234 19.9999 0.909362 19.9999H3.1366C3.63872 19.9999 4.04553 19.5927 4.04553 19.091V9.091C4.04553 8.58888 3.63872 8.18164 3.1366 8.18164Z"
        />
        <path
          d="M8.45489 10.9084H6.22766C5.72511 10.9084 5.3183 11.3157 5.3183 11.8178V19.0901C5.3183 19.5927 5.72511 19.9995 6.22766 19.9995H8.45489C8.95702 19.9995 9.36383 19.5923 9.36383 19.0901V11.8178C9.36383 11.3157 8.95702 10.9084 8.45489 10.9084Z"
        />
        <path
          d="M13.7723 10.9084H11.5451C11.043 10.9084 10.6362 11.3157 10.6362 11.8178V19.0901C10.6362 19.5927 11.043 19.9995 11.5451 19.9995H13.7723C14.2749 19.9995 14.6817 19.5923 14.6817 19.0901V11.8178C14.6817 11.3157 14.2749 10.9084 13.7723 10.9084Z"
        />
        <path
          d="M19.0906 8.18164H16.8634C16.3613 8.18164 15.9545 8.58888 15.9545 9.091V19.091C15.9545 19.5931 16.3613 19.9999 16.8634 19.9999H19.0906C19.5928 19.9999 20 19.5923 20 19.091V9.091C20 8.58888 19.5928 8.18164 19.0906 8.18164Z"
        />
        <path
          d="M10.2651 5.47656V7.11316C10.7605 7.08039 11.2826 6.84805 11.2826 6.30295C11.2826 5.74039 10.7102 5.57571 10.2651 5.47656Z"
        />
        <path
          d="M8.84167 3.51786C8.84167 3.93147 9.14933 4.17062 9.76933 4.29488V2.81445C9.20593 2.83105 8.84167 3.16211 8.84167 3.51786Z"
        />
        <path
          d="M10 0C7.24298 0 5 2.2434 5 5C5 7.75575 7.24298 9.99915 10 9.99915C12.757 9.99915 15 7.75575 15 5C15 2.2434 12.757 0 10 0ZM10.2651 7.95702V8.46894C10.2651 8.60979 10.157 8.75021 10.0157 8.75021C9.87617 8.75021 9.76936 8.60979 9.76936 8.46894V7.95702C8.37234 7.92298 7.67745 7.08809 7.67745 6.43489C7.67745 6.10511 7.87702 5.91447 8.18936 5.91447C9.11532 5.91447 8.39532 7.05532 9.76936 7.11277V5.38511C8.54383 5.16255 7.8017 4.62511 7.8017 3.70766C7.8017 2.58383 8.73617 2.00426 9.76936 1.97192V1.53106C9.76936 1.39021 9.87617 1.24979 10.0157 1.24979C10.157 1.24979 10.2651 1.39021 10.2651 1.53106V1.97192C10.9094 1.98894 12.2323 2.39319 12.2323 3.20383C12.2323 3.52596 11.9915 3.71575 11.7102 3.71575C11.1723 3.71575 11.18 2.83192 10.2651 2.81489V4.38553C11.3562 4.61745 12.3226 4.93958 12.3226 6.21277C12.3226 7.32 11.4962 7.8817 10.2651 7.95702Z"
          fill={colorCondition}
        />
      </g>
      <defs>
        <clipPath id="clip0_147_37">
          <rect width="25" height="25" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
