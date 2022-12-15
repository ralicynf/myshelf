import { useEffect, useState } from 'react'
import { GetBookReportByBook, CreateBookReport } from '../services/BookReport'

const BookReport = ({ user, bookId }) => {

    console.log(user)
    // const initialState = {
    //     review: '',
    //     rating: null,
    //     readAgain: false,
    //     userId: reviewer.id,
    //     bookId: bookId
    // }

    const [bookReports, setBookReports] = useState([])
    const [newBookReport, setNewBookReport] = useState()

    const handleBookReports = async () => {
        const res = await GetBookReportByBook(bookId)
        if (res) {
            setBookReports(res)
        }
    }

    useEffect(() => {
        handleBookReports()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        await CreateBookReport(newBookReport)
        setNewBookReport()
        handleBookReports()
    }

    const handleChange = (event) => {
        setNewBookReport({...newBookReport, [event.target.id]: event.target.value})
    }

    return bookReports.length > 0 ? (
        <div>
            {bookReports.map((report) => (
                <div>
                    <p>{report.review}</p>
                </div>
            ))}
            <form onSubmit={handleSubmit}>
                <label htmlFor='review'>Leave a review of the book!</label>
                <input
                    type="text"
                    id='review'
                    value={newBookReport.review}
                    onChange={handleChange}
                />
            </form>
        </div>
    ) : (
        <div>
            <h3>You have not left a review on this book yet. Leave one now!</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor='review'>Leave a review of the book!</label>
                <input
                    type="text"
                    id='review'
                    value={newBookReport.review}
                    onChange={handleChange}
                />
            </form>
        </div>
    )
        

}

export default BookReport