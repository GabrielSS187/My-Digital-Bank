import { FC } from 'react';

export const Service: FC<{ color?: string }> = ({ color }) => {
  const colorCondition: string = color ?? 'fill-[#B1B1B1]';
  return (
    <svg
      className={`!h-[25px] !w-[25px] ${colorCondition}`}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_147_10)">
        <path
          d="M19.8283 1.00036L18.9997 0.17173C18.8269 -0.00108164 18.5651 -0.0484253 18.343 0.0523557L13.8924 2.01708C13.7172 2.09677 13.5926 2.25704 13.5582 2.44594C13.5242 2.63536 13.5845 2.82911 13.7204 2.96508L17.0349 6.27957C17.1709 6.41555 17.3647 6.47582 17.5541 6.4418C17.743 6.40746 17.9033 6.28281 17.9829 6.10762L19.9476 1.657C20.0484 1.43485 20.0011 1.1731 19.8283 1.00036Z"
        />
        <path
          d="M3.78516 12.9004L0.514071 16.1715C-0.171357 16.8569 -0.171357 17.9719 0.514071 18.6573L1.34266 19.4859C2.02809 20.1714 3.14313 20.1714 3.82852 19.4859L7.09961 16.2148L3.78516 12.9004ZM3.41996 17.4169C3.19094 17.6459 2.82028 17.6459 2.59129 17.4169C2.36235 17.1878 2.36235 16.8172 2.59129 16.5883L4.20516 14.9744C4.43418 14.7453 4.8048 14.7453 5.03375 14.9744C5.26277 15.2034 5.26277 15.574 5.03375 15.803L3.41996 17.4169Z"
        />
        <path
          d="M9.58545 13.7289L6.27097 10.4144C5.81413 9.95757 5.07054 9.95757 4.61374 10.4144C4.15691 10.8712 4.15691 11.6148 4.61374 12.0716L7.92823 15.3861C8.38499 15.843 9.12862 15.843 9.58545 15.3861C10.0423 14.9294 10.0423 14.1857 9.58545 13.7289Z"
        />
        <path
          d="M15.3778 6.27958L13.7205 4.62231L9.17117 9.1716C8.71355 8.71399 7.97164 8.71399 7.51394 9.1716L7.09961 9.58594L10.4141 12.9004L10.8284 12.4861C11.286 12.0284 11.286 11.2865 10.8284 10.8289L15.3778 6.27958Z"
        />
        <path
          d="M18.9718 13.9983C18.0206 13.0471 16.8768 12.8426 15.5643 13.0771L12.9005 10.4136L12.2644 11.0497C12.4738 11.8368 12.2702 12.701 11.6567 13.3145L11.2432 13.7279L13.0765 15.561C12.8916 16.5954 12.909 17.4727 13.5514 18.4243C14.2927 19.5227 15.5902 20.1471 16.9495 19.96C17.1742 19.9291 17.3619 19.7732 17.4341 19.5582C17.5063 19.3432 17.4506 19.1059 17.2903 18.9454L16.4845 18.141V16.484H18.1432L18.9446 17.2854C19.1053 17.4461 19.3433 17.5014 19.5585 17.4286C19.7737 17.3557 19.9291 17.1672 19.9593 16.942C20.1024 15.8762 19.7537 14.7799 18.9718 13.9983Z"
        />
        <path
          d="M6.91557 4.42589C7.14811 3.12718 6.95982 1.98468 5.99436 1.01851C5.33744 0.36164 4.45854 0 3.51956 0C3.36147 0 3.20507 0.0103125 3.05069 0.0307421C2.82526 0.0606639 2.63655 0.216211 2.56366 0.43164C2.49077 0.646991 2.54643 0.885116 2.70722 1.0459L3.51643 1.84707V3.51558H1.85108L1.04788 2.70113C0.887453 2.5407 0.649836 2.48519 0.434759 2.55757C0.219759 2.62996 0.0642515 2.81785 0.0333532 3.04265C-0.145162 4.34253 0.418079 5.66311 1.56726 6.43889C2.52241 7.08241 3.40499 7.09835 4.43163 6.91327L6.27229 8.75694L6.68592 8.34331C7.29943 7.72979 8.16353 7.52624 8.95064 7.73561L9.5865 7.09975L6.91557 4.42589Z"
        />
      </g>
      <defs>
        <clipPath id="clip0_147_10">
          <rect width="25" height="25" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
