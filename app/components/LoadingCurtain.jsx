'use client'

import { useAppContext } from '../context/state';

export default function LoadingCurtain() {

  const { isLoading } = useAppContext();
  // console.log(isLoading);

  return (
    <div className="fixed inset-0 z-[1000] flex justify-center items-center pointer-events-none">
      <div className={`bg-dark-grey h-full w-1/2 absolute left-0 transition-all duration-700 ease-in-out delay-1000 ${!isLoading && 'left-[-50%]'}`}></div>
      <div className={`w-[100px] h-[100px] z-[2000] opacity-100 transition-opacity duration-500 ease-in-out ${!isLoading && 'opacity-0'}`}>
        <div className="spinner w-[50px] h-[50px] mb-[50px] mx-auto border-[3px] border-white border-t-green rounded-full"></div>
      </div>
      <div className={`bg-dark-grey h-full w-1/2 absolute right-0 transition-all duration-700 ease-in-out delay-1000 ${!isLoading && 'right-[-50%]'}`}></div>
    </div>
  )
}
