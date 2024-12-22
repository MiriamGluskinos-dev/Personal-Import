import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import SearchPage from './pages/SearchPage'



export default function AppRoutes() {
  return (
    <Router>
      <Routes>
          <Route path='/search' element={<SearchPage/>}/>
      </Routes>
    </Router>
  )
}
