import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BookCard from '../components/BookCard'
import { GetBooks } from '../services/Book'
import Book from './Book'
import axios from 'axios'


const Home = () => {
    let navigate = useNavigate()
    const [books, setBooks] = useState([])
    
    const handleBooks = async () => {
        const bookData = await axios.get(`http://localhost:3001/myshelf/books/`)
        //console.log(bookData)
        setBooks(bookData.data)
        console.log(books)
    }
    
    useEffect(() => {
        handleBooks()
    }, [])

    return (
        <div>
            <h1>Welcome to your Library!</h1>
            <section className='r-flex'>
                {books.map((result) => 
                    <BookCard 
                        key={result.id}
                        id={result.id}
                        title={result.title}
                        author={result.author}
                        completed={result.completed}
                    />
                )}
            </section>
        </div>
    )
}

export default Home