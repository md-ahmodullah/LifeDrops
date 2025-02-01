import CustomHelmet from "../../ReusableComponents/Helmet";
import BannerSliders from "./Banner/BannerSlider";
import ContactUs from "./ContactUs/ContactUs";
import Featured from "./Featured/Featured";

export default function Home() {
  return (
    <>
      <CustomHelmet title={"LifeDrops | Home"} />
      <section className="min-h-screen">
        <BannerSliders />
        <Featured />
        <ContactUs />
      </section>
    </>
  );
}
