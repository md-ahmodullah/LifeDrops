import Lottie from "lottie-react";
import loader from "/public/loaderBlood.json";
export default function Loading() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="w-1/2 mx-auto flex flex-col items-center justify-center relative">
        <span className="text-2xl md:text-4xl lg:text-5xl font-bold text-red-600 absolute top-0.5 md:top-4 lg:top-14 z-10">
          LifeDrops
        </span>
        <Lottie animationData={loader} loop={true} />
      </div>
    </div>
  );
}
