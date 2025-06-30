import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import BookDetailsPage from "./BookDetailsPage";

const BookDetails = () => {
  const { bookId } = useParams();
  const allData = useLoaderData();
  console.log(allData);
  const bookData = allData.find((bk) => bk.bookId == bookId);

  return (
    <div>
      <BookDetailsPage book={bookData} />
    </div>
  );
};

export default BookDetails;
