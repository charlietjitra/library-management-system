import React from 'react'
import BookCard from './bookCard'
const BookCardContainer = ({books}) => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {books.map((book) => (
            <BookCard key={book._id} book={book}/>
        ))}
    </div>
  )
}

export default BookCardContainer