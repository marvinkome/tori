import React from "react";

const Icon = (props: any) => {
  return (
    <svg width="60" height="28" viewBox="0 0 60 28" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clipPath="url(#clip0_88_51)">
        <path
          d="M30.2812 14.9964C30.2812 14.434 29.9806 14.1527 29.3794 14.1527C28.5842 14.1527 27.886 14.56 27.2847 15.3746C26.6835 16.1892 26.3829 17.1686 26.3829 18.3129C26.3829 18.5845 26.4217 18.7202 26.4992 18.7202C27.1975 18.7008 28.0023 18.3032 28.9139 17.5274C29.8255 16.7322 30.2812 15.8886 30.2812 14.9964ZM32.8123 24.2477C32.1528 24.6938 30.8631 24.9169 28.943 24.9169C27.0229 24.9169 25.5489 24.3447 24.521 23.2004C23.493 22.0561 22.9791 20.5336 22.9791 18.6329C22.9791 16.7128 23.59 15.0546 24.8119 13.6582C26.0532 12.2423 27.789 11.5344 30.0194 11.5344C30.931 11.5344 31.7649 11.7769 32.5213 12.2617C33.2971 12.7466 33.685 13.6 33.685 14.8219C33.685 16.0243 33.1517 17.2171 32.085 18.4002C31.0376 19.5833 29.6024 20.4851 27.7793 21.1058C27.7793 21.3385 28.012 21.5325 28.4775 21.6876C28.9624 21.8234 29.4376 21.8913 29.903 21.8913C31.377 21.8913 32.5407 21.6294 33.3941 21.1058C33.4135 21.0864 33.4426 21.0767 33.4814 21.0767C33.5202 21.0767 33.5396 21.2609 33.5396 21.6294C33.5396 22.7543 33.2971 23.6271 32.8123 24.2477ZM41.4565 25.0914C39.2455 25.0914 37.6066 24.529 36.5399 23.4041C35.4732 22.2792 34.9399 20.8633 34.9399 19.1566C34.9399 16.771 35.735 14.8703 37.3254 13.4545C38.9352 12.0387 40.8941 11.3308 43.2021 11.3308C43.6481 11.3308 43.91 11.3405 43.9875 11.3599C44.1039 11.4569 44.1621 11.9223 44.1621 12.7563C44.1621 13.5903 44.0457 14.0945 43.813 14.2691H43.6093C42.1159 14.2691 40.9038 14.6182 39.9728 15.3164C39.5849 15.6073 39.2455 16.0631 38.9546 16.6838C38.6637 17.3044 38.5182 18.0511 38.5182 18.9239C38.5182 19.7966 38.78 20.5239 39.3037 21.1058C39.8274 21.6682 40.671 21.9495 41.8347 21.9495C42.7463 21.9495 43.5512 21.7749 44.2494 21.4258C44.327 21.387 44.3754 21.3676 44.3948 21.3676C44.55 21.5228 44.6276 22.0464 44.6276 22.9386C44.6276 23.8308 44.5209 24.3641 44.3076 24.5387C43.6675 24.9072 42.7172 25.0914 41.4565 25.0914ZM48.8094 6.87967C49.3524 6.87967 49.7888 7.05422 50.1185 7.40333C50.4482 7.75244 50.6131 8.20822 50.6131 8.77067C50.6131 9.33312 50.39 9.81799 49.944 10.2253C49.5173 10.6132 49.0324 10.8071 48.4893 10.8071C47.9657 10.8071 47.539 10.6423 47.2093 10.3126C46.899 9.96345 46.7438 9.50767 46.7438 8.94522C46.7438 8.38277 46.9571 7.8979 47.3838 7.49061C47.8105 7.08332 48.2857 6.87967 48.8094 6.87967ZM50.2931 14.1236L50.2349 18.8366C50.2349 20.3494 50.2737 21.4646 50.3512 22.1822C50.4482 22.8804 50.7004 23.5398 51.1076 24.1605C51.1076 24.3544 50.71 24.6647 49.9149 25.0914C49.1197 25.5181 48.4409 25.7314 47.8784 25.7314C47.7039 25.7314 47.5293 25.4405 47.3547 24.8587C47.1802 24.2768 47.0638 23.7241 47.0056 23.2004C46.9668 22.6768 46.9475 20.9118 46.9475 17.9056C46.9475 14.8994 47.0153 13.2606 47.1511 12.989C47.5972 12.6399 48.3827 12.4654 49.5076 12.4654C49.9537 12.4654 50.2252 12.5236 50.3222 12.6399L50.2931 14.1236ZM56.8309 5.19232C56.7921 5.6384 56.7436 6.86028 56.6854 8.85794C58.14 8.85794 58.8673 8.88704 58.8673 8.94522C58.8673 9.60464 58.7703 10.1962 58.5764 10.7198C58.3824 11.2241 58.1982 11.4762 58.0236 11.4762H56.6563C56.6175 14.3467 56.5981 16.6838 56.5981 18.4875C56.5981 20.2718 56.6272 21.4646 56.6854 22.0658C56.8018 23.0744 57.1994 23.8986 57.8782 24.5387C57.8782 24.752 57.5 25.0623 56.7436 25.4696C56.0066 25.8769 55.3084 26.0806 54.6489 26.0806C54.5908 26.0806 54.4744 25.9836 54.2998 25.7896C54.1447 25.5957 53.9701 25.2757 53.7762 24.8296C53.6016 24.3835 53.4853 23.9471 53.4271 23.5204C53.3883 23.0937 53.3689 21.5713 53.3689 18.953C53.3689 16.3347 53.398 13.8618 53.4562 11.5344L51.827 11.5635C51.73 11.4665 51.6815 11.0496 51.6815 10.3126C51.6815 9.55616 51.7688 9.10038 51.9434 8.94522C52.3701 8.92583 52.884 8.90643 53.4853 8.88704C53.4853 7.76214 53.4562 7.03483 53.398 6.70512C53.3398 6.37541 53.3107 6.18146 53.3107 6.12327C53.3107 5.92932 53.6404 5.70628 54.2998 5.45415C54.9787 5.20202 55.5702 5.07595 56.0745 5.07595C56.5787 5.07595 56.8309 5.11474 56.8309 5.19232Z"
          fill="currentColor"
        />
        <path
          d="M20.6029 13.3923C18.7846 28.2588 28.0185 28.2542 12.8663 28.2541C-2.28596 28.2541 0.138369 30.3377 0.138406 16.3364C0.138443 2.33513 0.138365 3.33512 0.138365 3.33512C0.138365 3.33512 22.4212 -1.47416 20.6029 13.3923Z"
          fill="currentColor"
        />
        <path
          d="M7.26935 14.4972C9.38308 14.3002 10.9326 13.8076 11.9178 13.0194C12.9209 12.2133 13.4225 11.4251 13.4225 10.6549C13.4225 9.8667 13.0373 9.29349 12.2671 8.93523C11.4968 8.55906 10.5206 8.37097 9.3383 8.37097C8.71134 8.37097 8.07543 8.42471 7.43057 8.53219C7.32309 9.30245 7.26935 11.2908 7.26935 14.4972ZM7.56491 23.7672C7.36787 23.9642 6.97379 24.1165 6.38266 24.224C5.79153 24.3493 5.29892 24.412 4.90484 24.412C4.51075 24.412 4.1704 24.3583 3.8838 24.2508L4.04501 8.74714C3.81215 8.46054 3.57928 7.98584 3.34641 7.32306C3.13145 6.66028 3.02397 6.25724 3.02397 6.11394C3.02397 5.95272 3.04189 5.8542 3.07771 5.81837C3.11354 5.76463 3.6778 5.71089 4.77049 5.65715C5.88109 5.5855 7.00066 5.54968 8.12917 5.54968C9.25769 5.54968 10.2608 5.61237 11.1386 5.73776C12.0163 5.86315 12.9299 6.08707 13.8792 6.4095C14.8286 6.71402 15.581 7.20663 16.1363 7.88732C16.6916 8.56801 16.9692 9.44575 16.9692 10.5205C16.9692 11.5774 16.5931 12.5626 15.8407 13.4762C15.0884 14.3897 14.0673 15.16 12.7776 15.7869C12.7776 16.0736 13.3418 17.3633 14.4704 19.6561C15.5989 21.9311 16.4945 23.4 17.1573 24.0627C17.1752 24.0807 17.1842 24.1075 17.1842 24.1433C17.1842 24.1971 17.0409 24.2867 16.7543 24.412C15.9661 24.7882 15.1152 24.9763 14.2017 24.9763L13.5299 24.9226C13.1358 24.5285 12.4462 23.2208 11.461 20.9996C10.4937 18.7784 9.9563 17.417 9.84882 16.9155C9.63386 17.0409 8.783 17.2289 7.29622 17.4797C7.33205 21.0802 7.42161 23.176 7.56491 23.7672Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_88_51">
          <rect width="59.3967" height="27.8801" fill="white" transform="translate(0 0.0599365)" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Icon;