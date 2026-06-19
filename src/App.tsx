import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { LandingPage } from './pages/LandingPage'
import { DayPage } from './pages/DayPage'

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dia/:numero" element={<DayPage />} />
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  )
}
