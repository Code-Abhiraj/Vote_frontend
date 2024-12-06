import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css'
import IndexPage from './pages/IndexPage'
import OtpVerify from './pages/OtpVerify'
import OfficerDash from './pages/OfficerDash'
import VotingPage from './pages/VotingPage'
function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
      <Route path="/OtpVerify" element={<OtpVerify />} />
      <Route path="/OfficerDash" element={<OfficerDash />} />
      <Route path="/VotingPage" element={<VotingPage />} />
    </Routes>
    
  )
}

export default App
