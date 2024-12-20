import React, { useState } from 'react'
import Spinner from '../component/Spinner'
import BackButton from '../component/BackButton'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useSnackbar } from 'material-ui-snackbar-provider'

const AddBook = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [bookName, setBookName] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [country, setCountry] = useState('');
  const navigate = useNavigate();
  const snackbar = useSnackbar();

  const handleSubmit = async(e) => {
    e.preventDefault();
    const data = {
      bookName,
      author,
      publishYear,
      country
    }
    setIsLoading(true);
    await axios.post('http://localhost:3000/addbook', data)
      .then(res => {
        setIsLoading(false);
        navigate('/');
        snackbar.showMessage('Book added succesfully');
      })
      .catch(err => {
        setIsLoading(false);
        snackbar.showMessage('Failed to add book');
        console.log(err);
      })
  }

  return (
    <div className="max-w-4xl p-4 mx-auto">
      <div className="flex items-center gap-x-4">
        <BackButton />
        <h1 className="text-3xl font-bold text-gray-800">Add Book</h1>
      </div>

      {isLoading ? (
        <Spinner />
      ) : (
        <div className="mt-8">
          <form onSubmit={handleSubmit} className="p-6 space-y-6 bg-white rounded-lg shadow-md">
            <div className="space-y-2">
              <label className="block font-medium text-gray-700">Title</label>
              <input
                type="text"
                value={bookName}
                onChange={e => setBookName(e.target.value)}
                className="w-full px-4 py-2 transition-colors border border-gray-300 rounded-md focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                placeholder="Enter book title"
              />
            </div>

            <div className="space-y-2">
              <label className="block font-medium text-gray-700">Author</label>
              <input
                type="text"
                value={author}
                onChange={e => setAuthor(e.target.value)}
                className="w-full px-4 py-2 transition-colors border border-gray-300 rounded-md focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                placeholder="Enter author name"
              />
            </div>

            <div className="space-y-2">
              <label className="block font-medium text-gray-700">Publish Year</label>
              <input
                type="text"
                value={publishYear}
                onChange={e => setPublishYear(e.target.value)}
                className="w-full px-4 py-2 transition-colors border border-gray-300 rounded-md focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                placeholder="Enter publish year"
              />
            </div>

            <div className="space-y-2">
              <label className="block font-medium text-gray-700">Country</label>
              <input
                type="text"
                value={country}
                onChange={e => setCountry(e.target.value)}
                className="w-full px-4 py-2 transition-colors border border-gray-300 rounded-md focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                placeholder="Enter country"
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 font-medium text-white transition-colors bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200"
            >
              Add Book
            </button>
          </form>
        </div>
      )}
    </div>
  )
}

export default AddBook