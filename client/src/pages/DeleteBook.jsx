import React, { useState } from 'react'
import Spinner from '../component/Spinner'
import BackButton from '../component/BackButton'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { useSnackbar } from 'notistack'

const DeleteBook = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleDelete = async () => {
    setIsLoading(true);
    await axios.delete(`http://localhost:3000/deletebook/${id}`)
      .then(res => {
        setIsLoading(false);
        navigate('/');
        enqueueSnackbar('Book deleted successfully', { variant: 'success' });
      })
      .catch(err => {
        setIsLoading(false);
        enqueueSnackbar('Failed to delete book', { variant: 'error' });
        console.log(err);
      })
  }

  return (
    <div className='p-4'>
      <BackButton />
      {isLoading ? (<Spinner/>
      ) : (
        <div className='flex flex-col items-center bg-blue-900 rounded-xl w-[600px] p-8 mx-auto'>
          <h1 className='text-2xl text-white'>You sure you wanna delete this book </h1>

          <button onClick={handleDelete} className='w-full p-4 m-8 text-white bg-red-600'>
            Yes, I am sure
          </button>
        </div>
      )}
      
    </div>
  )
}

export default DeleteBook