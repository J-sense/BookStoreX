import { FaStar, FaRegStar, FaBookOpen } from "react-icons/fa";
import { Link } from "react-router-dom";

export const BookCard = ({ book }) => {
  const renderRating = () => {
    const stars = [];
    const fullStars = Math.floor(book.rating);
    const hasHalfStar = book.rating % 1 >= 0.5;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<FaStar key={i} className="text-yellow-400 opacity-70" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-400" />);
      }
    }
    return stars;
  };

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
      {/* Book Cover with Hover Effect */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={book.image}
          alt={book.bookName}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Category Badge */}
        <div className="absolute top-4 right-4 bg-indigo-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md">
          {book.category}
        </div>
      </div>

      {/* Book Details */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-900 line-clamp-2">
            {book.bookName}
          </h3>
          <span className="text-sm text-gray-500">{book.yearOfPublishing}</span>
        </div>

        <p className="text-indigo-600 font-medium mb-2">by {book.author}</p>

        {/* Rating */}
        <div className="flex items-center mb-3">
          <div className="flex mr-2">{renderRating()}</div>
          <span className="text-gray-700 font-medium">
            {book.rating.toFixed(1)}
          </span>
        </div>

        {/* Publisher & Pages */}
        <div className="flex justify-between text-sm text-gray-500 mb-4">
          <span>{book.publisher}</span>
          <span className="flex items-center">
            <FaBookOpen className="mr-1" /> {book.totalPages} pages
          </span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {book.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Read More Button */}
        <Link to={`books/${book.bookId}`}>
          <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg font-medium transition-colors">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};
