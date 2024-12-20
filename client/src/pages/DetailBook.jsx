import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import BackButton from '../component/BackButton'
import Spinner from '../component/Spinner'

const DetailBook = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [books, setBooks] = useState([]);
  const { id } = useParams();

  useEffect(() => {
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
  }, []);

  const DetailRow = ({ label, value }) => (
    <div className="py-4 border-b border-gray-100 last:border-0">
      <span className="inline-block w-32 font-medium text-white">{label}</span>
      <span className="text-white">{value}</span>
    </div>
  );

  return (
    <div className="max-w-4xl p-4 mx-auto">
      <div className="flex items-center mb-6 gap-x-4">
        <BackButton />
        <h1 className="text-3xl font-bold text-white">Book Details</h1>
      </div>

      {isLoading ? (
        <Spinner />
      ) : (
        <div className="overflow-hidden bg-blue-900 rounded-lg shadow-md">
          <div className="p-6 space-y-1">
            <DetailRow label="ID" value={books._id} />
            <DetailRow label="Title" value={books.bookName} />
            <DetailRow label="Author" value={books.author} />
            <DetailRow label="Publish Year" value={books.publishYear} />
            <DetailRow label="Country" value={books.country} />
            <DetailRow
              label="Added At"
              value={new Date(books.createdAt).toLocaleString()}
            />
            <DetailRow
              label="Updated At"
              value={new Date(books.updatedAt).toLocaleString()}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default DetailBook