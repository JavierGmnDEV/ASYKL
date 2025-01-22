import { GoogleLogin } from '@react-oauth/google'
import useAuthStore from '../storeZustand/authStore'
import {jwtDecode as jwt_decode} from 'jwt-decode'
import { useNavigate } from 'react-router-dom'

function Login() {
  const { login } = useAuthStore()
  const navigate = useNavigate()

  const handleLoginSuccess = (response) => {
    const decoded = jwt_decode(response.credential)
    const user = { name: decoded.name, email: decoded.email }
    login(user)
    navigate('/ecommerce')
  }

  const handleLoginFailure = (error) => {
    console.error('Error al iniciar sesión con Google:', error)
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold text-purple-700 mb-6">Login</h1>
        <GoogleLogin
          onSuccess={handleLoginSuccess}
          onFailure={handleLoginFailure}
          className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition duration-300"
        />
      </div>
    </div>
  )
}

export default Login