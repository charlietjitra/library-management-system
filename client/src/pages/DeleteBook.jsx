import React, { useState } from 'react'
import Spinner from '../component/Spinner'
import BackButton from '../component/BackButton'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { useSnackbar } from 'material-ui-snackbar-provider'

const DeleteBook = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const snackbar = useSnackbar();

  const handleDelete = async () => {
    setIsLoading(true);
    await axios.delete(`http://localhost:3000/deletebook/${id}`)
      .then(res => {
        setIsLoading(false);
        navigate('/');
        snackbar.showMessage('Book successfully deleted');
      })
      .catch(err => {
        setIsLoading(false);
        snackbar.showMessage('Failed to delete book');
        console.log(err);
      })
  }

  return (
    <div className='p-4'>
      <BackButton />
      {isLoading ? (<Spinner/>
      ) : (
        <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto'>
          <h1 className='text-2xl'>You sure you wanna delete this book </h1>

          <button onClick={handleDelete} className='w-full p-4 m-8 text-white bg-red-600'>
            Yes, I am sure
          </button>
        </div>
      )}
      
    </div>
  )
}

export default DeleteBook