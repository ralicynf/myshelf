import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GetBookReportByBook, CreateBookReport } from '../services/BookReport'

const BookReport = ({ user }) => {
    let bookId = useParams()
    let book_id = parseInt(bookId.id)

    console.log(user)

    const initialState = {
        review: ' ',
        rating: null,
        readAgain: false,
        userId: user.id,
        bookId: book_id
    }
    console.log(initialState)

    const [bookReports, setBookReports] = useState([])
    const [formState, setFormState] = useState(initialState)

    const handleBookReports = async () => {
        const res = await GetBookReportByBook(book_id)
        if (res) {
            setBookReports(res)
        }
    } 
    console.log(bookReports)

    useEffect(() => {
        handleBookReports()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log("what is up")
        await CreateBookReport(book_id, formState)
        console.log(formState, 'hey')
        handleBookReports()
        setFormState(initialState)
        window.history.back()
    }

    const handleChange = (event) => {
        setFormState({ ...formState, [event.target.id]: event.target.value })
    }

    return bookReports.length > 0 ? (
        <div className='login-box the-form form-items' >
            <form onSubmit={handleSubmit} className='flex-column'>
                <label htmlFor='review'>Leave a review of the book!</label>
                <input
                    type="text"
                    id='review'
                    value={formState.review}
                    onChange={handleChange}
                />
                <button type="submit">Submit review</button>
            </form>
        </div>
    ) : (
        <div className='login-box the-form form-items' >
            <h3>You have not left a review on this book yet. Leave one now!</h3>
            <form onSubmit={handleSubmit} className='flex-column'>
                <label htmlFor='review'>Leave a review of the book!</label>
                <input
                    type="text"
                    id='review'
                    value={formState.review}
                    onChange={handleChange}
                />
                <button type="submit">Submit review</button>
            </form>
        </div>
    )
        

}

export default BookReport