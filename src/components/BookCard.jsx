import axios from "axios"
import { useParams, useNavigate } from "react-router-dom"

const BookCard = (bookDetails) => {
    let { id } = useParams()
    let navigate = useNavigate()

    const goHome = () => {
        navigate('/')
    }

    const deleteBook = async () => {
        const deleted = await axios.delete(`http://localhost:3001/myshelf/books/${id}`)
        console.log("deleted", deleted)
        goHome()
    }

    return (
        <section>
        <div className='box'>
            <div className="book-card" onClick={ () => {bookDetails.onClick(bookDetails.id)}}>
                <div>
                    <h2 className="book-names rotate-text">{bookDetails.title}</h2>
                </div>
            </div>
        </div>
        <div>
            {/* <button onClick={deleteBook}>Delete</button> */}
        </div>
        </section>
    )
}

export default BookCard

//