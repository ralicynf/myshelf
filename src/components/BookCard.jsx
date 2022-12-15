const BookCard = (bookDetails) => {

    return (
        <div className='box'>
                <div className="book-card" onClick={ () => {bookDetails.onClick(bookDetails.id)}}>
                    <h2 className="book-names rotate-text">{bookDetails.title}</h2>
            </div>
        </div>
    )
}

export default BookCard

//