// import bgSearch from "../assets/images/sliderImage/slider14.webp";
import searchImg from "../assets/images/login2.png";
// import lottie1 from "/public/deep.json";
export default function Search() {
  return (
    <>
      <section className="bg-[url('https://i.ibb.co.com/Wn48j1L/searchbg.jpg')] bg-cover bg-center bg-no-repeat min-h-screen bg-red-900 bg-blend-multiply bg-opacity-90">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div></div>
          <div>
            <img src={searchImg} alt="" />
            {/* <Lottie animationData={lottie1} loop={true} /> */}
          </div>
        </div>
      </section>
    </>
  );
}
