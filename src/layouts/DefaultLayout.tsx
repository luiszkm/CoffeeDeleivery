import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'

export function DefaultLayout() {
  return (
    <div className=" min-h-screen sm:px-20 md:px-30 lg:px-40 ">
      <Header />
      <Outlet />
    </div>
  )
}
