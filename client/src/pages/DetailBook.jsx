import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import BackButton from '../component/BackButton'
import Spinner from '../component/Spinner'

const DetailBook = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [books, setBooks] = useState([]);
  const { id } = useParams();

  useEffect(()=> {
    setIsLoading(true);
    axios.get(`http://localhost:3000/book/${id}`)
      .then(res => {
        setBooks(res.data.data);
        setIsLoading(false);
      })
      .catch(err => {
        console.log(err);
        setIsLoading(false);
      })
  },[]);

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='my-4 text-3xl'>Book Details</h1>
      {isLoading ? ( 
        <Spinner/>
      ) : (
         <div className='flex flex-col border-2 border-sky-400 rounded-xl'>
          <div className='my-4'> 
            <span className='mr-4 text-xl text-gray-400'>Id</span>
            <span>{books._id}</span>
          </div>
          <div className='my-4'> 
            <span className='mr-4 text-xl text-gray-400'>Title</span>
            <span>{books.bookName}</span>
          </div>
          <div className='my-4'> 
            <span className='mr-4 text-xl text-gray-400'>Author</span>
            <span>{books.author}</span>
          </div>
          <div className='my-4'> 
            <span className='mr-4 text-xl text-gray-400'>Publish Year</span>
            <span>{books.publishYear}</span>
          </div>
          <div className='my-4'> 
            <span className='mr-4 text-xl text-gray-400'>Country</span>
            <span>{books.country}</span>
          </div>
          <div className='my-4'> 
            <span className='mr-4 text-xl text-gray-400'>Book Added At</span>
            <span>{new Date(books.createdAt).toString()}</span>
          </div>
          <div className='my-4'> 
            <span className='mr-4 text-xl text-gray-400'>Last Updated At</span>
            <span>{new Date(books.updatedAt).toString()}</span>
          </div>
         </div>
      )}
    </div>
  )
}

export default DetailBook