import { useEffect, useState } from "react";
import { BookCard } from "./BookCard";

const Books = () => {
  const [books, setBooks] = useState([]);
  console.log(books);
  useEffect(() => {
    fetch("./bookData.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {books.map((book) => (
          <BookCard key={book.bookId} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Books;
