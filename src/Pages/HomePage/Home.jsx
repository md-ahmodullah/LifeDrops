import BannerSliders from "./Banner/BannerSlider";
import Featured from "./Featured/Featured";

export default function Home() {
  return (
    <section className="min-h-screen">
      <BannerSliders />
      <Featured />
    </section>
  );
}
