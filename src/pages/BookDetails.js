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
        completed: ''
    }

    const [bookDetails, setBookDetails] = useState(initialState)

    const handleBookDetails = async () => {
        const response = await axios.get(`http://localhost:3001/myshelf/books/${id}`)
        //console.log(response)
        // let titled = response.data.title
        // let authored = response.data.author
        // let completedd = response.data.completed
        let object = {
            title: response.data.title,
            author: response.data.author,
            completed: response.data.completed
        }
        // if (completed === false) {
        //     return "On TBR"
        // } else if (completed === true) {
        //     return "Completed"
        // }
        console.log(response)
    }
    handleBookDetails()

    
    


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

    useEffect(() => {
        handleBookDetails()
    }, [user])

    return ( 
        <div>
            <div className='box'>
                <div>
                    <h1></h1>
                </div>
            </div>
        </div>
    )
}

export default BookDetails