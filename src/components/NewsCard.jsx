import { FaRegBookmark, FaShareAlt, FaStar, FaEye } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const {
    title,
    thumbnail_url,
    details,
    author,
    rating,
    total_view,
    tags,
  } = news;

  const formattedDate = new Date(author?.published_date).toLocaleDateString(
    "en-US",
    { year: "numeric", month: "short", day: "numeric" }
  );

  return (
    <div className="card bg-base-100 shadow-md mb-6">
      {/* Author Section */}
      <div className="flex bg-base-200 justify-between items-center p-4">
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="w-10 rounded-full">
              <img src={author?.img} alt={author?.name} />
            </div>
          </div>
          <div>
            <h2 className="font-semibold text-gray-800">{author?.name}</h2>
            <p className="text-sm text-gray-500">{formattedDate}</p>
          </div>
        </div>

        <div className="flex gap-3 text-gray-500">
          <FaRegBookmark className="cursor-pointer hover:text-gray-700" />
          <FaShareAlt className="cursor-pointer hover:text-gray-700" />
        </div>
      </div>

      {/* News Content */}
      <div className="card-body">
        <h3 className="card-title text-lg text-gray-900">{title}</h3>

        <figure className="mt-2 mb-3">
          <img
            src={thumbnail_url}
            alt={title}
            className="rounded-xl w-full h-56 object-cover"
          />
        </figure>

        <p className="text-gray-600 text-sm leading-relaxed">
          {details.length > 200 ? (
            <>
              {details.slice(0, 200)}...{" "}
              <a href="#" className="text-primary font-semibold">
                Read More
              </a>
            </>
          ) : (
            details
          )}
        </p>

        {/* Tags */}
        <div className="mt-3 flex flex-wrap gap-2">
          {tags?.map((tag, i) => (
            <div
              key={i}
              className="badge badge-outline text-xs font-medium"
            >
              #{tag}
            </div>
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <div className="flex justify-between items-center border-t px-5 py-3 text-sm">
        <div className="flex items-center gap-2 text-warning">
          <FaStar />
          <span className="font-semibold text-gray-700">{rating?.number}</span>
          {rating?.badge && (
            <span className="badge badge-warning badge-sm uppercase ml-2">
              {rating.badge}
            </span>
          )}
        </div>

        <div className="flex items-center gap-2 text-gray-500">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
