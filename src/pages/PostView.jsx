import { useLocation } from "react-router-dom";
import PhotoBoard from "../components/PhotoBoard";

export default function PostView() {
  const location = useLocation();
  const post = location.state;

  return (
    <section className="mx-auto max-w-7xl px-6 pt-6 sm:pt-12 lg:px-8">
      <div className="grid grid-cols-2">
        <div className="col-1 mx-auto max-w-2xl lg:mx-0">
          <h4 className="text-2xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-3xl dark:text-white">
            {post.title}
          </h4>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
            {post.description}
          </p>
        </div>
        <div className="col-2 flex justify-end items-end">
          <div className="col-2 flex justify-end items-end">
            <div className="col-2 flex justify-end items-end">
              <div className="col-2 flex justify-end items-end">
                <div className="col-2 flex justify-end items-end">
                  <button className="size-18 rounded-2xl bg-white shadow-md flex items-center justify-center text-gray-600 hover:shadow-lg hover:bg-gray-50 transition cursor-pointer">
                    <img src="icons/add-555.svg" alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PhotoBoard post={post} />
    </section>
  );
}
