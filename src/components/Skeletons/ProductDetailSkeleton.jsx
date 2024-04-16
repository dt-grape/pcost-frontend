import React from "react";

const ProductDetailSkeleton = () => {
  return (
    <>
      <div className={`flex md:flex-row flex-col justify-center gap-8`}>
        <div
          className={`md:w-1/3 aspect-square object-contain bg-white rounded-2xl p-4 shadow-2xl dark:shadow-none animate-pulse`}
        >
          <div
            className={`w-full bg-gray-200 animate-pulse h-full rounded-2xl`}
          ></div>
        </div>
        <div className="flex flex-col gap-y-4 justify-center">
          <div
            className={`bg-gray-200 animate-pulse rounded-xl md:w-96 w-full h-8`}
          ></div>
          <div
            className={`w-80 inline-flex items-center justify-center bg-gray-200 h-10 rounded-2xl md:self-start self-center px-8 animate-pulse`}
          ></div>
        </div>
      </div>
      <div className={`flex flex-col gap-y-4 md:mt-0 mt-4`}>
        <div className={`flex flex-col gap-y-2`}>
          <div
            className={`w-32 bg-gray-200 animate-pulse h-8 rounded-xl`}
          ></div>
          <hr className={`border-black dark:border-white`} />
          <ul className={`flex flex-col gap-y-2`}>
            <li>
              <div
                className={`w-48 h-8 rounded-xl bg-gray-200 animate-pulse`}
              ></div>
            </li>
            <li>
              <div
                className={`w-48 h-8 rounded-xl bg-gray-200 animate-pulse`}
              ></div>
            </li>
            <li>
              <div
                className={`w-48 h-8 rounded-xl bg-gray-200 animate-pulse`}
              ></div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ProductDetailSkeleton;
