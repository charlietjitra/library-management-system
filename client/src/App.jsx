import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage.jsx';
import AddBook from './pages/AddBook.jsx';
import DetailBook from './pages/DetailBook';
import EditBook from './pages/EditBook';
import DeleteBook from './pages/DeleteBook';

 
 
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/book/create' element={<AddBook />} />
      <Route path='/book/delete/:id' element={ <DeleteBook/> } />
      <Route path='/book/edit/:id' element={<EditBook />} />
      <Route path='/book/details/:id' element={<DetailBook />} />
    </Routes>
  )
}

export default App