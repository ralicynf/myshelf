import Client from "./api";

export const CreateBook = async (formData) => {
    try {
        const res = await Client.post('/books', formData)
        return res.send
    } catch (error) {
        throw error
    }
}

export const GetBooks = async () => {
    try {
        const res = await Client.get('/books')
        return res.data
    } catch (error) {
        throw error
    }
}

export const GetBookById = async () => {
    try {
        const res = await Client.get(`/'books/${bookId}`)
        return res.data
    } catch (error) {
        throw error 
    }
}

export const UpdateBook = async (bookId, update) => {
    try {
        const res = await Client.put(`/books/${bookId}`, update)
        return res.data
    } catch (error) {
        throw error
    }
}

export const DeleteBook = async (bookId) => {
    try {
        const res = await Client.delete(`/books/${bookId}`)
        return res.data
    } catch (error) {
        throw error
    }
}