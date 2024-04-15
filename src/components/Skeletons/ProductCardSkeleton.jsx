import React from "react";

const ProductCardSkeleton = () => {
  return (
    <div
      className="
    dark:bg-gray-800
    flex flex-col bg-white h-full justify-start p-4 rounded-2xl active:scale-90 hover:brightness-90 group transition shadow-2xl dark:shadow-none"
    >
      <div
        className={`w-full aspect-square object-contain bg-gray-200 animate-pulse rounded-2xl mb-4`}
      ></div>
      <div className={`flex flex-col`}>
        <div
          className={`font-medium text-xl group-hover:text-blue-500 bg-gray-200 animate-pulse h-6 mb-2`}
        ></div>
        <div className={`text-lg bg-gray-200 animate-pulse h-4`}></div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
