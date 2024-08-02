import React from 'react'
import {
  BrandsCarousel,
  BrandsCarouselContent,
  BrandsCarouselItem,
} from '../components/ui/brandsCarousel'
import { Lora } from 'next/font/google'
const lora = Lora({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

const AwardRight = () => {
  return (
    <svg
      width="60"
      height="96"
      viewBox="0 0 60 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.15">
        <path
          d="M53.875 10.4865C53.7115 7.10822 51.1352 3.56634 49.0205 1.46924C48.3361 0.790559 47.3109 1.30549 47.3586 2.26817C47.5202 5.53059 47.9531 8.96937 48.0966 9.68671C48.2743 10.5754 48.1854 10.0422 48.5409 11.7307C48.9129 13.4978 50.1712 15.5903 51.4087 17.4129C52.0209 18.3144 53.4696 17.972 53.6046 16.8907C53.8186 15.175 53.9954 12.9752 53.875 10.4865Z"
          fill="#f5f5f5"
        ></path>
        <path
          d="M58.142 22.5734C58.4938 20.1255 57.8162 16.2045 57.1644 14.4863C54.4098 18.3966 53.5211 19.4119 53.5211 22.2179C53.5211 23.9064 52.8104 28.972 53.5211 28.972C54.4335 28.972 57.6523 25.9807 58.142 22.5734Z"
          fill="#f5f5f5"
        ></path>
        <path
          d="M59.007 33.1486C58.0539 35.3703 55.7004 36.9052 53.3194 37.3254C53.3194 37.3254 53.6503 33.504 54.4747 31.2823C55.299 29.0606 56.288 27.7743 58.5626 26.3945C59.675 28.5823 59.2393 32.5265 59.007 33.1486Z"
          fill="#f5f5f5"
        ></path>
        <path
          d="M57.5984 43.6359C56.6453 45.8576 54.2918 47.3925 51.9108 47.8127C51.9108 47.8127 52.2417 43.9914 53.0661 41.7696C53.8904 39.5479 56.1397 37.9061 58.4143 36.5264C59.5267 38.7142 57.8306 43.0138 57.5984 43.6359Z"
          fill="#f5f5f5"
        ></path>
        <path
          d="M55.9258 55.3665C54.4451 57.2775 49.2711 59.0238 46.8609 58.8324C46.8609 58.8324 49.274 54.0002 51.6595 51.7228C54.045 49.4455 55.5697 48.6124 58.2288 48.2914C58.7558 50.6885 56.3069 54.8227 55.9258 55.3665Z"
          fill="#f5f5f5"
        ></path>
        <path
          d="M51.0614 66.8494C48.948 68.9616 42.9568 68.8864 40.5466 68.6949C40.5466 68.6949 42.9463 65.6735 45.7012 63.5406C48.4561 61.4078 50.7054 60.0954 53.3644 59.7744C53.8914 62.1715 52.1889 65.7226 51.0614 66.8494Z"
          fill="#f5f5f5"
        ></path>
        <path
          d="M42.5924 77.138C39.6594 79.0932 34.9609 77.3293 32.5506 77.1378C32.5506 77.1378 33.4393 75.627 36.1942 73.4942C38.9492 71.3613 44.5462 71.9258 47.2053 71.6048C47.7323 74.0019 43.9187 76.2538 42.5924 77.138Z"
          fill="#f5f5f5"
        ></path>
        <path
          d="M30.6776 85.4027C26.5895 85.7583 23.6569 84.2475 22.4127 83.181C22.4127 83.181 24.6344 81.7744 26.7672 81.1523C28.9 80.5303 35.2987 80.6039 37.9141 81.1523C37.0761 83.7143 32.2656 85.2646 30.6776 85.4027Z"
          fill="#f5f5f5"
        ></path>
        <path
          d="M21.3441 91.1803C16.9896 91.0914 13.2573 88.3366 12.013 87.27C12.013 87.27 12.191 86.5589 18.0562 86.2035C23.9213 85.8482 26.8159 87.4307 29.4313 87.9792C28.5933 90.5411 22.9379 91.2128 21.3441 91.1803Z"
          fill="#f5f5f5"
        ></path>
        <path
          d="M7.75873 93.8444C3.40418 93.7556 1.44881 91.5338 1.44881 89.845C5.42139 88.0292 12.5847 89.183 16.0942 91.1735C15.2562 93.7354 9.35249 93.8769 7.75873 93.8444Z"
          fill="#f5f5f5"
        ></path>
        <path
          d="M47.9144 22.173C46.0972 20.1062 45.8758 16.5467 45.9923 15.0253C46.8912 14.8837 49.49 16.7193 51.2344 19.245C52.3751 20.8966 52.9527 24.5843 52.8944 26.3928C51.9916 25.8474 49.7317 24.2399 47.9144 22.173Z"
          fill="#f5f5f5"
        ></path>
        <path
          d="M47.7399 31.9458C45.9227 29.879 46.6533 25.9574 46.7698 24.4359C47.6686 24.2943 49.9132 25.9982 51.6576 28.5239C52.7982 30.1754 52.9581 34.3581 52.8999 36.1666C51.9971 35.6212 49.5572 34.0127 47.7399 31.9458Z"
          fill="#f5f5f5"
        ></path>
        <path
          d="M51.2064 38.3933C52.347 40.0449 52.2593 45.3633 51.6175 46.0022C47.7443 43.6623 45.1212 38.886 46.6576 34.3944C47.5565 34.2528 49.462 35.8677 51.2064 38.3933Z"
          fill="#f5f5f5"
        ></path>
        <path
          d="M45.1701 52.9673C44.067 50.4459 44.7257 44.2582 46.2377 43.0139C47.1366 42.8723 48.4581 45.6801 49.0801 48.7016C49.4848 50.6676 48.7248 54.567 47.7807 56.271C46.8778 55.7256 45.7922 54.3892 45.1701 52.9673Z"
          fill="#f5f5f5"
        ></path>
        <path
          d="M39.1171 61.3201C39.1171 58.568 40.6038 53.2332 42.1158 51.989C43.0147 51.8474 44.4498 55.0068 44.4492 59.3646C44.4488 62.6532 42.3958 65.5651 40.6279 67.0077C39.7251 66.4623 39.1171 63.0086 39.1171 61.3201Z"
          fill="#f5f5f5"
        ></path>
        <path
          d="M32.1972 69.9387C32.1972 67.1865 34.5966 61.496 36.5519 60.5191C37.5293 60.1631 38.063 62.8258 38.0625 67.1836C38.0621 70.4721 33.6101 75.2637 32.997 75.1819C32.384 75.1002 32.1972 71.6272 32.1972 69.9387Z"
          fill="#f5f5f5"
        ></path>
        <path
          d="M24.1912 75.4514C25.0633 72.8411 27.2118 70.8294 29.1671 69.8525C30.1445 69.4966 30.0569 70.2937 30.0564 74.6516C30.0559 77.9401 24.8133 81.4353 23.9246 81.3168C23.0359 81.1983 23.6568 77.0511 24.1912 75.4514Z"
          fill="#f5f5f5"
        ></path>
        <path
          d="M14.8593 81.1378C15.7314 78.5275 18.0587 75.9836 21.6135 75.6284C22.8574 75.5041 21.8801 78.8271 21.6133 80.0713C20.9238 83.2868 14.7704 86.144 13.8817 86.0256C12.993 85.9071 14.3248 82.7374 14.8593 81.1378Z"
          fill="#f5f5f5"
        ></path>
        <path
          d="M2.60576 85.4025C4.28142 83.2193 7.93357 80.694 11.4884 80.3388C12.7322 80.2145 11.3107 84.1585 10.2441 85.403C8.10414 87.8999 2.33489 88.898 1.44621 88.7796C0.557523 88.6611 1.44621 86.9133 2.60576 85.4025Z"
          fill="#f5f5f5"
        ></path>
      </g>
    </svg>
  )
}

const AwardLeft = () => {
  return (
    <svg
      width="59"
      height="96"
      viewBox="0 0 59 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.15">
        <path
          d="M5.41411 10.4865C5.57758 7.10822 8.15382 3.56634 10.2686 1.46924C10.953 0.790559 11.9781 1.30549 11.9305 2.26817C11.7689 5.53059 11.336 8.96937 11.1925 9.68671C11.0148 10.5754 11.1036 10.0422 10.7482 11.7307C10.3761 13.4978 9.11788 15.5903 7.88034 17.4129C7.26821 18.3144 5.81943 17.972 5.68451 16.8907C5.47044 15.175 5.29369 12.9752 5.41411 10.4865Z"
          fill="#f5f5f5"
        ></path>
        <path
          d="M1.14706 22.5734C0.795257 20.1255 1.47291 16.2045 2.12462 14.4863C4.87926 18.3966 5.76795 19.4119 5.76795 22.2179C5.76795 23.9064 6.47869 28.972 5.76795 28.972C4.85558 28.972 1.63674 25.9807 1.14706 22.5734Z"
          fill="#f5f5f5"
        ></path>
        <path
          d="M0.282107 33.1486C1.23513 35.3703 3.58867 36.9052 5.96968 37.3254C5.96968 37.3254 5.63874 33.504 4.81439 31.2823C3.99005 29.0606 3.00105 27.7743 0.726449 26.3945C-0.385934 28.5823 0.0498108 32.5265 0.282107 33.1486Z"
          fill="#f5f5f5"
        ></path>
        <path
          d="M1.69071 43.6359C2.64374 45.8576 4.99727 47.3925 7.37828 47.8127C7.37828 47.8127 7.04734 43.9914 6.223 41.7696C5.39865 39.5479 3.14932 37.9061 0.874719 36.5264C-0.237664 38.7142 1.45841 43.0138 1.69071 43.6359Z"
          fill="#f5f5f5"
        ></path>
        <path
          d="M3.3633 55.3665C4.84396 57.2775 10.018 59.0238 12.4282 58.8324C12.4282 58.8324 10.0151 54.0002 7.62955 51.7228C5.24403 49.4455 3.71934 48.6124 1.06028 48.2914C0.533273 50.6885 2.98215 54.8227 3.3633 55.3665Z"
          fill="#f5f5f5"
        ></path>
        <path
          d="M8.22765 66.8494C10.3411 68.9616 16.3322 68.8864 18.7425 68.6949C18.7425 68.6949 16.3428 65.6735 13.5879 63.5406C10.8329 61.4078 8.5837 60.0954 5.92464 59.7744C5.39763 62.1715 7.10013 65.7226 8.22765 66.8494Z"
          fill="#f5f5f5"
        ></path>
        <path
          d="M16.6967 77.138C19.6297 79.0932 24.3282 77.3293 26.7384 77.1378C26.7384 77.1378 25.8497 75.627 23.0948 73.4942C20.3399 71.3613 14.7428 71.9258 12.0838 71.6048C11.5568 74.0019 15.3703 76.2538 16.6967 77.138Z"
          fill="#f5f5f5"
        ></path>
        <path
          d="M28.6115 85.4027C32.6996 85.7583 35.6321 84.2475 36.8764 83.181C36.8764 83.181 34.6547 81.7744 32.5219 81.1523C30.389 80.5303 23.9904 80.6039 21.375 81.1523C22.213 83.7143 27.0234 85.2646 28.6115 85.4027Z"
          fill="#f5f5f5"
        ></path>
        <path
          d="M37.9449 91.1803C42.2995 91.0914 46.0318 88.3366 47.2761 87.27C47.2761 87.27 47.0981 86.5589 41.2329 86.2035C35.3677 85.8482 32.4731 87.4307 29.8578 87.9792C30.6958 90.5411 36.3512 91.2128 37.9449 91.1803Z"
          fill="#f5f5f5"
        ></path>
        <path
          d="M51.5303 93.8444C55.8849 93.7556 57.8403 91.5338 57.8403 89.845C53.8677 88.0292 46.7044 89.183 43.1949 91.1735C44.0329 93.7354 49.9366 93.8769 51.5303 93.8444Z"
          fill="#f5f5f5"
        ></path>
        <path
          d="M11.3746 22.173C13.1919 20.1062 13.4132 16.5467 13.2967 15.0253C12.3979 14.8837 9.79904 16.7193 8.05463 19.245C6.91397 20.8966 6.33639 24.5843 6.39463 26.3928C7.29744 25.8474 9.55737 24.2399 11.3746 22.173Z"
          fill="#f5f5f5"
        ></path>
        <path
          d="M11.5491 31.9458C13.3664 29.879 12.6358 25.9574 12.5193 24.4359C11.6205 24.2943 9.3759 25.9982 7.6315 28.5239C6.49084 30.1754 6.33095 34.3581 6.3892 36.1666C7.292 35.6212 9.73185 34.0127 11.5491 31.9458Z"
          fill="#f5f5f5"
        ></path>
        <path
          d="M8.08269 38.3933C6.94203 40.0449 7.02971 45.3633 7.6716 46.0022C11.5448 43.6623 14.1679 38.886 12.6314 34.3944C11.7326 34.2528 9.82709 35.8677 8.08269 38.3933Z"
          fill="#f5f5f5"
        ></path>
        <path
          d="M14.1189 52.9673C15.2221 50.4459 14.5634 44.2582 13.0513 43.0139C12.1525 42.8723 10.8309 45.6801 10.2089 48.7016C9.80423 50.6676 10.5642 54.567 11.5084 56.271C12.4112 55.7256 13.4969 54.3892 14.1189 52.9673Z"
          fill="#f5f5f5"
        ></path>
        <path
          d="M20.1719 61.3201C20.1719 58.568 18.6853 53.2332 17.1732 51.989C16.2744 51.8474 14.8393 55.0068 14.8398 59.3646C14.8403 62.6532 16.8933 65.5651 18.6612 67.0077C19.564 66.4623 20.1719 63.0086 20.1719 61.3201Z"
          fill="#f5f5f5"
        ></path>
        <path
          d="M27.0919 69.9387C27.0919 67.1865 24.6924 61.496 22.7372 60.5191C21.7598 60.1631 21.226 62.8258 21.2266 67.1836C21.227 70.4721 25.679 75.2637 26.2921 75.1819C26.9051 75.1002 27.0919 71.6272 27.0919 69.9387Z"
          fill="#f5f5f5"
        ></path>
        <path
          d="M35.0979 75.4514C34.2258 72.8411 32.0772 70.8294 30.1219 69.8525C29.1446 69.4966 29.2322 70.2937 29.2327 74.6516C29.2331 77.9401 34.4758 81.4353 35.3645 81.3168C36.2532 81.1983 35.6323 77.0511 35.0979 75.4514Z"
          fill="#f5f5f5"
        ></path>
        <path
          d="M44.4298 81.1378C43.5577 78.5275 41.2303 75.9836 37.6755 75.6284C36.4317 75.5041 37.409 78.8271 37.6758 80.0713C38.3653 83.2868 44.5187 86.144 45.4073 86.0256C46.296 85.9071 44.9642 82.7374 44.4298 81.1378Z"
          fill="#f5f5f5"
        ></path>
        <path
          d="M56.6833 85.4025C55.0076 83.2193 51.3555 80.694 47.8007 80.3388C46.5569 80.2145 47.9784 84.1585 49.0449 85.403C51.1849 87.8999 56.9542 88.898 57.8429 88.7796C58.7315 88.6611 57.8429 86.9133 56.6833 85.4025Z"
          fill="#f5f5f5"
        ></path>
      </g>
    </svg>
  )
}
const Awards = () => {
  const data = [
    { brand: 'Design & Graphics' },
    { brand: 'beginnerstop' },
    { brand: 'Brands & Concepts' },
    { brand: 'CSS Design Awards' },
    { brand: 'WOM July' },
    { brand: 'IN Design Awards' },
  ]

  return (
    <div className="my-12 text-gray-200" data-scroll-section>
      <h1
        className={`lg:w-1/2 text-left tracking-tighter text-3xl sm:text-4xl md:text-6xl mb-4 mx-4 font-bold ${lora.className}`}
      >
        Hey There,<span className="italic"> Check Out </span>
        Something you don't know About Our{' '}
        <span className="italic">Brand </span>!
      </h1>
      <div className="flex flex-col xl:flex-row ">
        <p className="text-xs xl:my-24 my-8 ml-8">
          Awards & <br /> Recognition
        </p>
        <div className="hidden lg:grid mx-auto justify-items-center grid-cols-1 md:grid-cols-3 gap-8 sm:gap-16 my-8 xl:my-24">
          {data.map((award, index) => (
            <div key={index} className="flex flex-col gap-2 w-[250px]">
              <div className="flex justify-between items-center">
                <div className="w-16">
                  <AwardLeft />
                </div>
                <h1 className={`text-lg text-center ${lora.className}`}>
                  {award.brand}
                </h1>
                <div className="w-16">
                  <AwardRight />
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* only show in mob */}
        <div className="lg:hidden block">
          <BrandsCarousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="overflow-hidden"
          >
            <BrandsCarouselContent>
              {data.map((award, index) => (
                <BrandsCarouselItem key={index} className="sm:basis-1/2">
                  <div className="flex flex-col gap-2 w-[300px] px-4">
                    <div className="flex justify-between items-center">
                      <div className="w-16">
                        <AwardLeft />
                      </div>
                      <h1
                        className={`text-xl sm:text-2xl text-center ${lora.className}`}
                      >
                        {award.brand}
                      </h1>
                      <div className="w-16">
                        <AwardRight />
                      </div>
                    </div>
                  </div>
                </BrandsCarouselItem>
              ))}
            </BrandsCarouselContent>
          </BrandsCarousel>
        </div>
      </div>
    </div>
  )
}

const Fourth = () => {
  return (
    <div className=" bg-black overflow-hidden">
      <div className="max-w-screen-2xl mx-auto">
        <Awards />
      </div>
    </div>
  )
}

export default Fourth