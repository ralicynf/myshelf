import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BookCard from '../components/BookCard'
import { GetBooksByUser } from '../services/Book'
import Book from './Book'
import axios from 'axios'


const Home = ({user, userId}) => {
    let navigate = useNavigate()

    const initialState = {
        title: '',
        author: '',
        completed: false
    }

    const [books, setBooks] = useState([])
    
    const handleBooks = async () => {
        const bookData = await GetBooksByUser(userId)
        if (bookData) {
            setBooks(bookData)
        }
        // setBooks(bookData.data)
        console.log(bookData)
    }
    handleBooks()

    const viewBookDetails = (id) => {
        navigate(`/books/${id}`)
    }

    

    // const deleteBook = async () => {
    //     const deleted = await axios.delete(`http://localhost:3001/myshelf/books/${id}`)
    //     console.log(deleted)
    //     goHome()
    // }
    
    useEffect(() => {
        handleBooks()
    }, [])

    return (
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
    )
}

export default Home