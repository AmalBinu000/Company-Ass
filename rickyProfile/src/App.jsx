
import './App.css'
import RickyProfiles from './components/RickyProfiles'
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import SingleProfile from './components/SingleProfile'

function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<RickyProfiles/>}/>
        <Route path='/profile/:id' element={<SingleProfile/>}/>
      </Routes>
    </>
  )
}

export default App
