import { useNavigate } from "react-router-dom";

export default function Board({ posts }) {
  const navigate = useNavigate();

  const handleClick = (post) => {
    navigate("/postview", { state: post });
  };

  return (
    <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3 dark:border-gray-700">
      {posts.map((post) => (
        <article
          key={post.id}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 lg:max-w-80"
          onClick={() => handleClick(post)}
        >
          {/* Imagen */}
          <div className="w-80 h-70 overflow-hidden">
            <img
              src={post.img}
              alt=""
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

          {/* Texto */}
          <div className="flex max-w-60 flex-col items-start justify-between">
            {/* Fecha + Categoría */}
            <div className="flex items-center gap-x-4 text-xs">
              <time
                dateTime={post.datetime}
                className="text-gray-500 dark:text-gray-400"
              >
                {post.date}
              </time>
              <a
                href={post.category.href}
                className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100 dark:bg-gray-800/60 dark:text-gray-300 dark:hover:bg-gray-800"
              >
                {post.category.title}
              </a>
            </div>

            {/* Título + Descripción */}
            <div className="group relative grow">
              <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600 dark:text-white dark:group-hover:text-gray-300">
                <span className="absolute inset-0" />
                {post.title}
              </h3>
              <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
                {post.description}
              </p>
            </div>

            {/* Autor + Lugar */}
            <div className="relative mt-8 flex flex-row items-center gap-x-4 justify-self-end text-sm leading-6">
              <p className="font-semibold text-gray-900 dark:text-white">
                <a>
                  <span className="absolute inset-0" />
                  {post.artist}
                </a>
              </p>
              <p className="text-gray-600 dark:text-gray-400">{post.place}</p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
