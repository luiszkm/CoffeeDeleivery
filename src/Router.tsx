import { Routes, Route } from 'react-router-dom'
import { App } from './pages/App'

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  )
}