import { Link } from 'react-router-dom'
import useAuthStore from '../storeZustand/authStore'

function Navbar() {
  const { user, logout } = useAuthStore()

  return (
    <div className="flex flex-col w-full md:w-1/7 h-full bg-purple-700 text-white">
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">E-commerce</h1>
        <nav className="flex flex-col space-y-2">
          <Link to="/" className="hover:bg-purple-600 p-2 rounded">Home</Link>
          <Link to="/ecommerce" className="hover:bg-purple-600 p-2 rounded">E-commerce</Link>
        </nav>
      </div>
      <div className="mt-auto p-4">
        {user && (
          <div className="flex flex-col items-center">
            <p className="mb-2">Hello, {user.name}</p>
            <button onClick={logout} className="bg-red-500 hover:bg-red-600 p-2 rounded">Logout</button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar