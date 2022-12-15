import Client from './api'

export const GetBookReportByBook = async (bookId) => {
    try {
        const res = await Client.get(`/bookreports/${bookId}`)
        return res.data
    } catch (error) {
        throw error
    }
}

export const CreateBookReport = async (formData) => {
    try {
        const res = await Client.post('/bookreports', formData)
        return res.data
    } catch (error) {
        throw error
    }
}