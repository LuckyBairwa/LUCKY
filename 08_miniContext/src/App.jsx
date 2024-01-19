
import './App.css'
import UserContextProvider from './Context/userContextProvider'
import Profile from './components/Profile'
import Login from './components/login'

function App() {

  return (
    <UserContextProvider>
      <h1>React with Chai</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
