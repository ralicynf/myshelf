import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CreateBook } from '../services/Book'

const AddBook = ({ user }) => {
    let navigate = useNavigate()

    const initialState = {
        title: '',
        author: '',
        completed: '',
        userId: user.id
    }

    const [formState, setFormState] = useState(initialState)

    const handleSubmit = async (book) => {
        book.preventDefault()
        const newBook = await CreateBook(formState)
        setFormState(initialState)
        navigate(`/books/${newBook.id}`)
    }

    const handleChange = (event) => {
        setFormState({...formState, [event.target.id]: event.target.value})
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='add-book-form'>
                    <label htmlFor="Book Title">Book Title: </label>
                    <input
                        onChange={handleChange}
                        type='text'
                        id='title'
                        value={formState.title}
                    />
                </div>
                <div className='add-book-form'>
                    <label htmlFor="Author">Author: </label>
                    <input
                        onChange={handleChange}
                        type='text'
                        id='author'
                        value={formState.author}
                    />
                </div>
                <div className='add-book-form'>
                    <label htmlFor="Completed">Completed?</label>
                    <input
                        onChange={handleChange}
                        type='checkbox'
                        id='completed'
                        value="true"
                        data-value="true"
                    />
                </div>
                <div className='add-book-form'>
                    <label htmlFor="Add to TBR">Add to TBR?</label>
                    <input
                        onChange={handleChange}
                        type='checkbox'
                        id='completed'
                        value="false"
                        data-value="false"
                    />
                </div>
                <div className='btn'>
                    <button id="sub-btn" type="submit">Add book!</button>
                </div>
            </form>
        </div>
    )
}

export default AddBook