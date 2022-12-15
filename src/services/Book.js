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

export const GetBookById = async (id) => {
    try {
        const res = await Client.get(`/books/${id}`)
        return res.data
    } catch (error) {
        throw error 
    }
}

export const GetBooksByUser = async (userId) => {
    try {
        const res = await Client.get(`/books/b/${userId}`)
        return res.data
    } catch (error) {
        throw error
    }
}

// export const UpdateBook = async (id, update) => {
//     try {
//         const res = await Client.put(`/books/${id}`, update)
//         return res.data
//     } catch (error) {
//         throw error
//     }
// }

export const UpdatedBook = async (id, update) => {
    try {
        const res = await Client.put(`/books/${id}`, update)
        return res.data
    } catch (error) {
        throw error
    }
}

export const DeleteBook = async (id) => {
    try {
        const res = await Client.delete(`/books/${id}`)
        return res.data
    } catch (error) {
        throw error
    }
}