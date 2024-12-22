import React from 'react'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import AppLayoutPage from './pages/appLayoutPage'



export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<AppLayoutPage/>}>
          {/* <Route path='/search' element={<SearchPage/>}/> */}
        </Route>
      </Routes>
    </Router>
  )
}
