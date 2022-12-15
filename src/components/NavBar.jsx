import { Link, useNavigate } from 'react-router-dom'

const NavBar = ({ user, handleLogout}) => {
    let authenticatedOptions
    let navigate = useNavigate()

    if (user) {
        authenticatedOptions = (
            <nav className="flex-row nav-links">
                <Link to='/'>Home</Link>
                <Link to='/TBR'>My TBR</Link>
                <Link to='/addBook'>Add Book</Link>
                <Link onClick={handleLogout} to="/">Logout</Link>
            </nav>
        )
    }

    const publicOptions = (
        <nav className="flex-row nav-links">
                <Link to='/'>Home</Link>
                <Link to='/register'>Register</Link>
                <Link to='/login'>Login</Link>
        </nav>
    )

    return (
        <header id="header">
            <nav className='nav-container flex-row'>
                <div>
                    <h1>MyShelf</h1>
                </div>
                <div className='center-column'>
                    {user ? authenticatedOptions : publicOptions}
                </div>
            </nav>
        </header>
    )
}

export default NavBar