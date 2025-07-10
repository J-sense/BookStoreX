import {
  FaStar,
  FaRegStar,
  FaBookOpen,
  FaHeart,
  FaShareAlt,
} from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCollection,
  addToFavroute,
} from "../../../../redux/features/cart/cartSlice";
import { useState } from "react";

const BookDetailsPage = ({ book }) => {
  //   const book = {
  //     author: "F. Scott Fitzgerald",
  //     bookId: 1,
  //     bookName: "The Great Gatsby",
  //     category: "Classic",
  //     image: "https://i.ibb.co.com/khHN7Pk/9780143454212.jpg",
  //     publisher: "Scribner",
  //     rating: 4.5,
  //     review:
  //       "'The Great Gatsby' by F. Scott Fitzgerald is a timeless masterpiece that delves into the decadence and disillusionment of the Jazz Age. Set in the Roaring Twenties, the novel unveils the enigmatic Jay Gatsby's extravagant parties, masking a pursuit of lost love. Narrated by Nick Carraway, the story explores themes of wealth, love, and the American Dream, drawing readers into a vivid portrayal of the glittering yet elusive world of the East and West Egg. Fitzgerald's prose is both poetic and haunting, weaving a compelling narrative that transcends its era. A poignant exploration of societal excess and the human condition, 'The Great Gatsby' remains a literary gem that resonates across generations.",
  //     tags: ["Fiction", "Romance"],
  //     totalPages: 192,
  //     yearOfPublishing: 1925,
  //   };
  const dispatch = useDispatch();
  const [prioboi, setPrioboi] = useState();
  const favBook = useSelector((state) => state.book.fav);
  const renderRating = () => {
    const stars = [];
    const fullStars = Math.floor(book.rating);
    const hasHalfStar = book.rating % 1 >= 0.5;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<FaStar key={i} className="text-yellow-400 text-lg" />);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <FaStar key={i} className="text-yellow-400 text-lg opacity-70" />
        );
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-400 text-lg" />);
      }
    }
    return stars;
  };
  const handleAddToCollection = (book) => {
    dispatch(addToCollection({ bookId: book?.bookId }));
  };
  const handleFacroute = (book) => {
    const isFavBookExists = favBook.find(
      (item) => item?.bookId == book?.bookId
    );
    if (isFavBookExists) {
      setPrioboi("book is already exists");
    }
    dispatch(addToFavroute({ bookId: book?.bookId }));
  };
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button className="flex items-center text-indigo-600 hover:text-indigo-800 mb-8 transition-colors">
          <IoMdArrowRoundBack className="mr-2" />
          Back to Collection
        </button>

        {/* Book Details Card */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="md:flex">
            {/* Book Cover Section */}
            <div className="md:w-1/3 p-6 md:p-8 flex justify-center bg-gradient-to-br from-indigo-50 to-purple-50">
              <div className="relative w-full max-w-xs">
                <img
                  src={book.image}
                  alt={book.bookName}
                  className="w-full h-auto rounded-lg shadow-xl transform rotate-1 hover:rotate-0 transition-transform duration-300"
                />
                {/* Category Badge */}
                <div className="absolute -top-3 -right-3 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md">
                  {book.category}
                </div>
              </div>
            </div>

            {/* Book Info Section */}
            <div className="md:w-2/3 p-6 md:p-8">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    {book.bookName}
                  </h1>
                  <p className="text-xl text-indigo-600 font-medium mb-4">
                    by {book.author}
                  </p>
                </div>
                <div className="flex space-x-3">
                  {!prioboi ? (
                    <>
                      {" "}
                      <button
                        className="text-gray-400 hover:text-red-500 transition-colors"
                        onClick={() => handleFacroute(book)}
                      >
                        <FaHeart className="text-2xl" />
                      </button>
                      <button className="text-gray-400 hover:text-indigo-600 transition-colors">
                        <FaShareAlt className="text-2xl" />
                      </button>
                    </>
                  ) : (
                    <>
                      <h1>{prioboi}</h1>
                    </>
                  )}
                </div>
              </div>

              {/* Rating and Meta */}
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className="flex items-center">
                  <div className="flex mr-2">{renderRating()}</div>
                  <span className="text-gray-700 font-medium">
                    {book.rating.toFixed(1)}
                  </span>
                </div>

                <div className="flex items-center text-gray-600">
                  <FaBookOpen className="mr-2" />
                  <span>{book.totalPages} pages</span>
                </div>

                <div className="text-gray-600">
                  Published: {book.yearOfPublishing}
                </div>

                <div className="text-gray-600">Publisher: {book.publisher}</div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {book.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Review */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  About This Book
                </h3>
                <p className="text-gray-700 leading-relaxed">{book.review}</p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => handleAddToCollection(book)}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium flex-1 text-center transition-colors"
                >
                  Add to Collection
                </button>
                <button className="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-6 py-3 rounded-lg font-medium flex-1 text-center transition-colors">
                  Read Sample
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Related Books Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            You Might Also Enjoy
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Placeholder for related books - you would map through actual related books here */}
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
              >
                <div className="bg-gray-200 h-40 mb-3 rounded">
                  <img src={item.image} />
                </div>
                <h3 className="font-medium text-gray-900">
                  Related Book {item}
                </h3>
                <p className="text-sm text-gray-600">Author Name</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;
