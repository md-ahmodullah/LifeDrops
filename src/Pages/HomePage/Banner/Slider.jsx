import BannerButton from "./BannerButton";

export default function Slider({ title, subTitle }) {
  return (
    <>
      <div className="w-9/12 md:w-1/2 lg:w-1/3 space-y-6">
        <h1 className="text-3xl lg:text-5xl text-red-500 font-bold">{title}</h1>
        <p className="text-base text-gray-600">{subTitle}</p>
        <div className="flex gap-4">
          <BannerButton
            link={"/"}
            btnVariant={"btn btn-primary"}
            text={"Join As A Donor"}
          />
          <BannerButton
            link={"/"}
            btnVariant={"btn btn-error"}
            text={"Search Donors"}
          />
        </div>
      </div>
    </>
  );
}
