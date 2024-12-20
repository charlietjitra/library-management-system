import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Spinner from '../component/Spinner';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BookCardContainer from '../component/home/BookCardContainer';

const Homepage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    axios.get('http://localhost:3000/books')
      .then(res => {
        setBooks(res.data.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
      <div className="flex items-center justify-between">
        <h1 className="my-8 text-3xl font-bold">Book Lists</h1>
        <Link 
          to="/book/create"
          className="p-2 text-white transition-colors bg-blue-600 rounded-full hover:bg-blue-700"
        >
          <FontAwesomeIcon icon={faPlus} className="w-5 h-5" />
        </Link>
      </div>

      {isLoading ? (
        <Spinner />
      ) : (
        <BookCardContainer books={books} />
      )}
    </div>
  );
};

export default Homepage;