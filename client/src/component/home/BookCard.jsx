import React from 'react'
import { faPenToSquare, faPlus, faCircleInfo, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const BookCard = ({book}) => {
  return (
    <div
        key={book._id}
        className="overflow-hidden transition-shadow bg-white rounded-lg shadow-md hover:shadow-lg"
    >
        <div className="p-6 bg-blue-900">
        <h3 className="mb-2 text-xl font-semibold text-white">{book.bookName}</h3>
        <div className="space-y-2 text-gray-600">
            <p className="flex items-center">
            <span className="w-24 font-medium text-white">Author:</span>
            <span className='text-white'>{book.author}</span>
            </p>
            <p className="flex items-center">
            <span className="w-24 font-medium text-white">Published:</span>
            <span className='text-white'>{book.publishYear}</span>
            </p>
            <p className="flex items-center">
            <span className="w-24 font-medium text-white">Country:</span>
            <span className='text-white'>{book.country}</span>
            </p>
        </div>
        </div>
        
        <div className="flex justify-end px-6 py-4 space-x-4 bg-blue-900 border-t bg-gray-50">
        <Link 
            to={`/book/details/${book._id}`}
            className="text-blue-600 hover:text-blue-800"
        >
            <FontAwesomeIcon icon={faCircleInfo} className="w-5 h-5" />
        </Link>
        <Link 
            to={`/book/edit/${book._id}`}
            className="text-green-600 hover:text-green-800"
        >
            <FontAwesomeIcon icon={faPenToSquare} className="w-5 h-5" />
        </Link>
        <Link 
            to={`/book/delete/${book._id}`}
            className="text-red-600 hover:text-red-800"
        >
            <FontAwesomeIcon icon={faTrash} className="w-5 h-5" />
        </Link>
        </div>
    </div>
  )
}

export default BookCard