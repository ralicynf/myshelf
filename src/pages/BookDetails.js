import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import {
    GetBookById,
    UpdateBook,
    DeleteBook
} from '../services/Book'
import axios from 'axios'
import BookReport from '../components/BookReport'
import { CreateBookReport } from '../services/BookReport'

const BookDetails = ({ user }) => {
    let { id } = useParams()
    let navigate = useNavigate()

    const initialState = {
        title: '',
        author: '',
        completed: false
    }

    const [myBookDetails, setMyBookDetails] = useState(initialState)
    const [formState, setFormState] = useState(initialState)
    const [edit, setEdit] = useState(false)

    const handleBookDetails = async () => {
        const response = await GetBookById(id)
        setMyBookDetails(response)   
    }

    // const handleClick = async (e) => {
    //     await CreateBookReport(id, { userId: user.id})
    //     handleBookDetails()
    // }

    const handleChange = (event) => {
        setFormState({ ...formState, [event.target.id]: event.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await UpdateBook(id, formState)
        setEdit(false)
        handleBookDetails()
    }

    const editClick = () => {
        setEdit(true)
        setFormState({
            title: myBookDetails.title,
            author: myBookDetails.author,
            completed: myBookDetails.completed
        })
    }

    const deleteClick = async () => {
        if (window.confirm('Are you sure you wish to delete this book from your library?')) {
            await DeleteBook(myBookDetails.id)
            navigate('/')
        }
    }

    const goToReview = () => {
        navigate(`/books/${id}/bookreport`)
    }
    useEffect(() => {
        handleBookDetails()
    }, [user])

    return ( 
        <section>
            <div>
                <div className='box'>
                <div>
                {edit ? (
                    <form obSubmit={handleSubmit}>
                        <div>
                            <h3>Title:</h3>
                            <input 
                                type='text'
                                value={formState.title}
                                id='title'
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <h3>Author:</h3>
                            <input 
                                type='text'
                                value={formState.author}
                                id='author'
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <h3>Completed?</h3>
                            <input 
                                type='checkbox'
                                id='completed'
                                value={formState.completed}
                                data-value="true"
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <button id="sub-btn" type='submit'>Submit </button>
                        </div>
                    </form>
                ) : ( <div>
                    <h1>{myBookDetails.title}</h1>
                    <h3>{myBookDetails.author}</h3>
                    <div>
                        {myBookDetails.completed === true ? (
                            <h3>You have read this book!</h3>
                        ) : (
                            <h3>This is on your TBR!</h3>
                        ) }
                    </div>
                    <button id="del-btn" onClick={deleteClick}>Delete</button>
                    <button id="up-btn" onClick={editClick}>Update</button>
                </div>)}
            </div>
                </div>
            </div>
            
            <div className='flex-column center-column'>
                <button id="review-btn" onClick={goToReview}>
                    <h3>Add a book review</h3>
                </button>
            </div>
        </section>
    )
}

export default BookDetails