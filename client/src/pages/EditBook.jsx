import React, { useState, useEffect } from 'react'
import Spinner from '../component/Spinner'
import BackButton from '../component/BackButton'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { useSnackbar } from 'material-ui-snackbar-provider'

const EditBook = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [bookName, setBookName] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [country, setCountry] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();
  const snackbar = useSnackbar();

  useEffect(() => {
    setIsLoading(true);
    axios.get(`http://localhost:3000/book/${id}`)
      .then(res => {
        setBookName(res.data.data.bookName);
        setAuthor(res.data.data.author);
        setPublishYear(res.data.data.publishYear);
        setCountry(res.data.data.country);
        setIsLoading(false);
        
      })
      .catch(err => {
        setIsLoading(false);
        console.log(err);
      })
  },[]);

  const handleSubmit = async(e) => {
    const data = {
      bookName,
      author,
      publishYear,
      country
    }
    setIsLoading(true);
    await axios.put(`http://localhost:3000/editbook/${id}`, data)
      .then(res => {
        setIsLoading(false);
        snackbar.showMessage('Successfully edited the book')
        navigate('/');
      })
      .catch(err => {
        setIsLoading(false);
        snackbar.showMessage('Failed to edit book');
        console.log(err);
      })
  }

  return (
    <div className="max-w-4xl p-4 mx-auto">
      <div className="flex items-center gap-x-4">
        <BackButton />
        <h1 className="text-3xl font-bold text-gray-800">Edit Book</h1>
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
              Save
            </button>
          </form>
        </div>
      )}
    </div>
  )
}

export default EditBook