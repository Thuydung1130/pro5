// import Register from './Pages/Register'
// import Login from './Pages/Login'
// import Face from './Pages/Face'
// import { Route, Routes } from 'react-router-dom'
// import Layout from './Layouts'
import "./App.css"
import AllRoute from './components/AllRoute'

function App() {
  

  return (
    <>
    <AllRoute/>
      {/* <Routes >
        <Route path='/' element={<Layout/>}>
            <Route path='/' element={<Face/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='register' element={<Register/>}/>
            
        </Route>
      </Routes> */}
      {/* <Routes>
        <Route path='/' element={<Layout/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='topics' element={<Topics/>}/>
            <Route path='answer' element={<Answer/>}/>
        </Route>
      </Routes> */}

    </>
  )
}

export default App
