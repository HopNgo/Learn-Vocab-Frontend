import React from 'react'
import { Route, Routes } from 'react-router-dom';

import HomePage from './Pages/HomePage/HomePage';
import LearnPage from "./Pages/LearnPage/LearnPage";
import ManagePage from './Pages/ManagePage/ManagePage';



function App() {

  console.log('re-render-app');

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/learn' element={<LearnPage />} />
        <Route path='/vocabslist' element={<ManagePage />} />
      </Routes>
    </div>
  )
}

export default App
