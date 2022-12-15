import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BookCard from '../components/BookCard'
import { GetBooks, GetBooksByUser } from '../services/Book'
import Login from './Login'


const Home = ({user, setUser, userId}) => {
    let navigate = useNavigate()

    const [books, setBooks] = useState([])
    
    const handleBooks = async () => {
        const bookData = await GetBooksByUser(user.id)
        if (bookData) {
            setBooks(bookData)
        }
        // setBooks(bookData.data)
        console.log(bookData)
    }

    useEffect(() => {
        if (user) handleBooks()
    }, [user])

    const viewBookDetails = (id) => {
        navigate(`/books/${id}`)
    }

    return user ? (
        <div className='page-width'>
            <h1>Welcome to your Library!</h1>
            <section className='flex-row wrap-row'>
                {books.map((result) => 
                    <BookCard 
                        key={result.id}
                        id={result.id}
                        title={result.title}
                        author={result.author}
                        completed={result.completed}
                        onClick={viewBookDetails}
                    />
                )}
            </section>
        </div>
    ) : (
        <div className="protected">
            <Login setUser={setUser} />
        </div>
    )
}

export default Home