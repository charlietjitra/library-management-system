import React from 'react'
import { Link } from 'react-router-dom'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const BackButton = ({ destination = '/' }) => {
  return (
    <div className='flex'>
        <Link 
            to={destination}
            className='px-4 py-1 text-white bg-blue-900 rounded-lg w-fit'
        >
            <FontAwesomeIcon icon={faArrowLeft} />
        </Link> 
    </div>
  )
}

export default BackButton