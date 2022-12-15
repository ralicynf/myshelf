import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GetBooks } from '../services/Book'


const Home = () => {
    let navigate = useNavigate()
    const [books, setBooks] = useState([])
    
    const handleBooks = async () => {
        const bookData = await GetBooks()
        console.log(bookData)
        setBooks({
            title: bookData.title,
            author: bookData.author,
            completed: bookData.completed
        })
        console.log(books)
    }
    
    useEffect(() => {
        handleBooks()
    }, [])

    return (
        <div>
            <h1>Welcome to your Library!</h1>
            <section>
                
            </section>
        </div>
    )
}

export default Home