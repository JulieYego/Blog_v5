import { Route, Routes } from 'react-router-dom'
import './assets/index.css'
import Navbar from './components/TopNav'
import Home from './pages/Home'
import AddBlog from './pages/AddBlog'
import SchoolForm from './components/SchoolForm'

function App() {

  return (
    <>
    <div className="app">
      <Navbar/>
      <div className="content">
        <Routes>
          <Route path = '/' element={<Home/>}/>
          <Route path = '/new' element={<AddBlog/>}/>
          <Route path='/school' element={<SchoolForm/>}></Route>
        </Routes>
      </div>
    </div> 
    </>
  )
}

export default App
