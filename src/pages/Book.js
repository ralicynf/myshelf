import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import {
    GetBookById,
    UpdateBook,
    DeleteBook
} from '../services/Book'
import axios from 'axios'

const Book = ({ user }) => {
    let { id } = useParams()
    let navigate = useNavigate()

    const [bookDetails, setBookDetails] = useState()

    const getBookDetails = async () => {
        const response = await axios.get(`http://localhost:3001/myshelf/books/${id}`)
        console.log(response)
        setBookDetails(response.data.book)
    }
    console.log(getBookDetails())
    // const initialState = {
    //     title: '',
    //     author: '',
    //     completed: '',
    //     userId: user.id
    // }

    // const [bookDetails, setBookDetails] = useState(null)
    // const [edit, setEdit] = useState(false)
    // const [formState, setFormState] = useState(initialState)

    // const handleBookDetails = async () => {
    //     const data = await GetBookById(id)
    //     setBookDetails(data)
    // }

    // const handleClick = async (e) => {
    //     await AddBookReport(id, { userId: user.id})
    //     handleBookDetails()
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

    // useEffect(() => {
    //     handleBookDetails()
    // }, [user])

    return ( 
        <div>

        </div>
    )
}

export default Book