import NavBar from './components/NavBar';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Book from './pages/BookDetails';
import AddBook from './components/AddBook';
import TBR from './pages/TBR';
import { Routes, Route } from 'react-router-dom'
import { CheckSession } from './services/Auth';
import { useState, useEffect } from 'react'

function App() {
  const [user, setUser] = useState(null)

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (token) {
      checkToken()
    }
  }, [])

  const handleLogout = () => {
    setUser(null)
    localStorage.clear()
  }

  return (
    <div className="App">
      <NavBar user={user} handleLogout={handleLogout}/>
      <main>
        <Routes>
          <Route path="/" element={<Home user={user} setUser={setUser} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/addbook" element={<AddBook user={user} setUser={setUser} />} />
          <Route path="/TBR" element={<TBR user={user} />} />
          <Route path="/books/:id" element={<Book user={user} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
