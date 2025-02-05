import { MdLibraryAdd } from "react-icons/md";
import { Link } from "react-router-dom";
import content from "../../assets/images/content-management.png";
export default function ContentManagement() {
  return (
    <>
      <section className="w-full md:w-11/12 mx-auto py-6">
        <div className="flex items-center justify-between gap-4 md:gap-0">
          <div className="flex items-center gap-2 px-4">
            <div>
              <img src={content} alt="blog Logo" className="w-8 md:w-12" />
            </div>
            <div>
              <h1 className="text-base lg:text-2xl text-gray-700 font-bold">
                Content Management
              </h1>
              <p className="text-xs text-red-500 font-medium w-11/12">
                Read More, Learn More
              </p>
            </div>
          </div>
          <div className="mr-4 border border-gray-300 px-2 md:px-4 py-3 rounded shadow bg-base-200">
            <Link
              to="/dashboard/content-management/add-blog"
              className="flex items-center gap-1.5 text-base md:text-xl font-bold"
            >
              <MdLibraryAdd />
              Add Blog
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
