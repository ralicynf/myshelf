const BookCard = (bookDetails) => {

    return (
        <div className='box'>
            <div className="book-card">
                <div className="recipe-card-name">
                    <h2>{bookDetails.title}</h2>
                    <h2>{bookDetails.author}</h2>
                    <h2>{bookDetails.completed}</h2>
                </div>
            </div>
        </div>
    )
}

export default BookCard

//onClick={ () => {bookDetails.onClick(bookDetails.id)