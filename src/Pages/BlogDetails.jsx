import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { IoShareSocialSharp } from "react-icons/io5";
import CustomHelmet from "../ReusableComponents/Helmet";
export default function BlogDetails() {
  return (
    <>
      <CustomHelmet title={"LifeDrops | Blog Details"} />
      <section className="w-3/5 mx-auto py-3">
        <div className="px-4">
          <h1 className="text-3xl font-bold">
            A Drop of Blood Can Create an Ocean of Hope that can Make a Family
            Happy
          </h1>
          <div className="flex items-center justify-between py-4 text-gray-400">
            <div className="flex gap-3 items-center">
              <img
                src="https://i.ibb.co.com/f9Xk6JF/git1.jpg"
                alt=""
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="text-sm font-semibold">
                <p>Admin</p>
                <p>20 January 2025</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-3xl">
              <FaFacebookF className="bg-gray-300 text-white p-1.5 rounded-full" />
              <FaTwitter className="bg-gray-300 text-white p-1.5 rounded-full" />
              <IoShareSocialSharp className="bg-gray-300 text-white p-1.5 rounded-full" />
            </div>
          </div>
          <div>
            <img
              src="https://i.ibb.co.com/BVFjL9vy/slider1.jpg"
              alt=""
              className="w-full h-[400px] object-cover"
            />
          </div>
          <p className="py-4 text-gray-600 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            placeat, magni reprehenderit, natus in accusamus deleniti fuga
            recusandae quo, aliquam saepe asperiores vero magnam perferendis
            odit tempore blanditiis est. Enim cum nesciunt ut quae maiores
            asperiores sunt, rerum minus doloribus nam quo ex odio numquam, quam
            vel in eligendi, nemo inventore repellat aperiam? Pariatur non quae
            tempora, animi vel atque molestiae exercitationem provident,
            expedita facilis rem voluptate at beatae dolor aperiam! Repudiandae
            corporis facere voluptatum, blanditiis ipsam sed suscipit dolores
            ducimus fuga veritatis, enim non quia,
          </p>
          <p className="text-gray-600 text-justify">
            necessitatibus possimus nemo architecto exercitationem id doloribus
            reprehenderit! Quam eaque natus earum inventore sit distinctio
            voluptatum aperiam ratione sequi quod iste aliquam molestiae
            voluptates corporis maxime saepe repellat velit, nisi vero est eum
            pariatur nihil repellendus. Minus pariatur nulla sit molestias
            accusamus non aliquid officia beatae sed iusto nihil dicta, aut
            voluptatum, enim voluptatibus, quaerat autem possimus. Ducimus, iure
            eveniet. Repudiandae molestias earum sint.
          </p>
          <img
            src="https://i.ibb.co.com/BVFjL9vy/slider1.jpg"
            alt=""
            className="w-full h-[300px] object-cover py-4"
          />
          <p className="text-gray-600 text-justify">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum,
            voluptatum, recusandae dolorem iusto soluta mollitia repellendus
            delectus ex aliquid, voluptate consequuntur quam ipsam eveniet minus
            sunt rerum iste? Magnam, reiciendis quae! Ex cum, aspernatur quaerat
            placeat eum officiis doloribus minima, enim nulla, tempora expedita
            autem amet dolore laboriosam reiciendis dolor?
          </p>
          <div className="flex items-center gap-1 pt-6">
            <p className="text-red-800 px-2 rounded-full font-normal">#blood</p>
            <p className="text-red-800 px-2 rounded-full font-normal">
              #campaign
            </p>
            <p className="text-red-800 px-2 rounded-full font-normal">
              #anemia
            </p>
          </div>
          <div className="divider"></div>
          <div className="flex flex-col gap-2 pb-8">
            <label htmlFor="" className="text-lg font-semibold">
              Leave Your Comment
            </label>
            <textarea
              className="textarea textarea-error h-28"
              placeholder="Your Comment..."
            ></textarea>
          </div>
        </div>
      </section>
    </>
  );
}
