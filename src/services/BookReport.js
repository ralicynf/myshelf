import Client from './api'

export const GetBookReportByBook = async (bookId) => {
    try {
        const res = await Client.get(`/bookreports/b/${bookId}`)
        return res.data
    } catch (error) {
        throw error
    }
}

export const CreateBookReport = async (bookId, formData) => {
    try {
        const res = await Client.post(`/bookreports/b/${bookId}`, formData)
        return res.data
    } catch (error) {
        throw error
    }
}