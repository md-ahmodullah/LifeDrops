import BannerButton from "./BannerButton";

export default function Slider({ title, subTitle }) {
  return (
    <>
      <div className="w-9/12 md:w-2/5 lg:w-1/3 space-y-6">
        <h1 className="text-3xl lg:text-5xl text-red-700 font-bold">{title}</h1>
        <p className="text-base text-gray-900 w-11/12">{subTitle}</p>
        <div className="flex gap-4">
          <BannerButton
            link={"/register"}
            btnVariant={"btn bg-blue-600"}
            text={"Join As A Donor"}
          />
          <BannerButton
            link={"/search"}
            btnVariant={"btn bg-red-600"}
            text={"Search Donors"}
          />
        </div>
      </div>
    </>
  );
}
