import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import NavbarApp from './components/Navbar'
import HomeScreen from './pages/HomeScreen'

function App() {
  return (
    <BrowserRouter>
      <NavbarApp />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App