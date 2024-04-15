import React from "react";
import { useSelector } from "react-redux";

const ProductByCategoryCardSkeleton = () => {
  const isGrid = useSelector((state) => state.grid.isGrid);

  return (
    <div
      className={`bg-white h-full dark:bg-gray-800 rounded-2xl active:scale-95 hover:brightness-90 group transition shadow-2xl dark:shadow-none `}
    >
      <div
        className={`flex gap-x-4 px-4  ${
          isGrid ? `flex-col` : `items-center`
        } `}
      >
        <div
          className={`md:w-48 w-32 aspect-square object-contain bg-gray-200 animate-pulse rounded-2xl my-4 ${
            isGrid ? `self-center` : ``
          } `}
        ></div>
        <div className={`flex flex-col`}>
          <div
            className={`font-medium text-xl group-hover:text-blue-500 bg-gray-200 animate-pulse h-6 mb-2 rounded-xl ${
              isGrid ? `` : `w-96`
            } `}
          ></div>
          <div
            className={`text-lg bg-gray-200 animate-pulse h-4 mb-2 rounded-xl ${
              isGrid ? `` : `w-48`
            } `}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ProductByCategoryCardSkeleton;
