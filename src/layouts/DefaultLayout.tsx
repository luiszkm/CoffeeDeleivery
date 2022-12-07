import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'

export function DefaultLayout() {
  return (
    <div className=" md:px-40">
      <Header />

      <Outlet />
    </div>
  )
}
