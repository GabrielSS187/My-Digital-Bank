import { FC } from 'react';

export const CreditCard: FC<{ color?: string }> = ({ color }) => {
  const colorCondition: string = color || '#B1B1B1';
  return (
    <svg
      className="!h-[25px] !w-[25px]"
      viewBox="0 0 25px 25px"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_147_31)">
        <path
          d="M17.6621 5.51034V5.23675C17.6621 3.97905 16.6389 2.95581 15.3812 2.95581H2.28094C1.0232 2.95585 0 3.97905 0 5.23675V5.51034H17.6621Z"
          fill={colorCondition}
        />
        <path
          d="M10.4347 12.8476C10.4347 11.6644 10.8152 10.5398 11.5178 9.61304H0V12.7948C0 14.0525 1.0232 15.0757 2.28094 15.0757H10.9162C10.601 14.3852 10.4347 13.6292 10.4347 12.8476ZM8.83109 12.1562H6.8625V10.9844H8.83109V12.1562ZM2.62727 10.9844H5.69062V12.1562H2.62727V10.9844Z"
          fill={colorCondition}
        />
        <path
          d="M12.7344 8.44124C13.6281 7.81597 14.6898 7.47909 15.8033 7.47909C16.4478 7.47909 17.0748 7.59226 17.6621 7.80855V6.68237H0V8.44124H12.7344Z"
          fill={colorCondition}
        />
        <path
          d="M20 12.8476C20 10.5298 18.1211 8.65088 15.8033 8.65088C13.4855 8.65088 11.6066 10.5298 11.6066 12.8476C11.6066 15.1653 13.4855 17.0442 15.8033 17.0442C18.1211 17.0442 20 15.1653 20 12.8476ZM16.369 15.0896V15.5665H15.7831V15.5665V15.5665H15.1971V15.0931C14.8429 14.9731 14.553 14.7621 14.27 14.5551L14.9618 13.6092C15.342 13.8873 15.5366 14.021 15.8033 14.021C15.9541 14.021 16.0761 13.9492 16.1219 13.8337C16.1773 13.6938 16.099 13.565 15.9124 13.489C15.9124 13.489 15.0748 13.2097 14.6876 12.8149C14.3627 12.4837 14.2594 12.0169 14.3628 11.5729C14.467 11.1258 14.7688 10.7763 15.1971 10.6017V10.1286H16.369V10.5821C16.6666 10.6647 16.9185 10.7869 17.0634 10.8655L16.5043 11.8954C16.1336 11.6942 15.7925 11.6338 15.6598 11.6792C15.531 11.7232 15.5114 11.8072 15.5041 11.8388C15.4936 11.8836 15.4881 11.9524 15.5597 12.0322C15.6286 12.109 16.3542 12.4037 16.3542 12.4037C17.1371 12.7224 17.5055 13.5228 17.2113 14.2654C17.0585 14.6514 16.7508 14.9437 16.369 15.0896Z"
          fill={colorCondition}
        />
      </g>
      <defs>
        <clipPath id="clip0_147_31">
          <rect className="!h-[25px] !w-[25px]" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
