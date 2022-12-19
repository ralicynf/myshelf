import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GetBookReportByBook, CreateBookReport } from '../services/BookReport'

const BookReportCard = ({ user }) => {
    let bookId = useParams()
    let book_id = parseInt(bookId.id)

    const [bookReports, setBookReports] = useState([])

    const handleBookReports = async () => {
        const res = await GetBookReportByBook(book_id)
        if (res) {
            setBookReports(res)
        }
    } 

    useEffect(() => {
        handleBookReports()
    }, [])

return bookReports.length > 0 ? (
        <div>
            <div > 
                {bookReports.map((report) => (
                    <div key={report.id} className="box">
                        <h4>{report.review}</h4>
                    </div>
                ))}
            </div>
        </div>
    ) : (
        <div>
            <h4>You have not yet left a review!</h4>
        </div>
    )

}

export default BookReportCard