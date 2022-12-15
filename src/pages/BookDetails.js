import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import {
    GetBookById,
    UpdateBook,
    DeleteBook
} from '../services/Book'
import axios from 'axios'

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

    const handleBookDetails = async () => {
        const response = await GetBookById(id)
        setMyBookDetails(response)   
    }

    // const handleClick = async (e) => {
    //     await AddBookReport(id, { userId: user.id})
    //     handleBookDetails()
    // }

    // const handleChange = (event) => {
    //     setFormState({ ...formState, [event.target.id]: event.target.value })
    // }

    // const handleSubmit = async (e) => {
    //     e.preventDefault()
    //     await UpdateBook(id, formState)
    //     setEdit(false)
    //     handleBookDetails()
    // }

    // const editClick = () => {
    //     setEdit(true)
    //     setFormState({
    //         title: bookDetails.title,
    //         author: bookDetails.author,
    //         completed: bookDetails.completed
    //     })
    // }

    // const deleteClick = async () => {
    //     if (window.confirm('Are you sure you wish to delete this book from your library?')) {
    //         await DeleteBook(bookDetails.id)
    //         navigate('/')
    //     }
    // }

    useEffect(() => {
        handleBookDetails()
    }, [user])

    return ( 
        <div>
            <div className='box'>
                <div>
                    <h1>{myBookDetails.title}</h1>
                    <h3>{myBookDetails.author}</h3>
                    <div>
                        {myBookDetails.completed === true ? (
                            <h3>You have read this book!</h3>
                        ) : (
                            <h3>This is on your TBR!</h3>
                        ) }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookDetails