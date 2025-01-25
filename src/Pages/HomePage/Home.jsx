import BannerSliders from "./Banner/BannerSlider";
import ContactUs from "./ContactUs/ContactUs";
import Featured from "./Featured/Featured";

export default function Home() {
  return (
    <section className="min-h-screen">
      <BannerSliders />
      <Featured />
      <ContactUs />
    </section>
  );
}
