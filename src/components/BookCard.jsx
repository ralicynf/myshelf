const BookCard = (bookDetails) => {

    return (
        <div className='box'>
            <div className="book-card">
                
                    <h2 className="book-names">{bookDetails.title}</h2>
                    {/* <h2>{bookDetails.author}</h2>
                    <h2>{bookDetails.completed}</h2> */}
                
            </div>
        </div>
    )
}

export default BookCard

//onClick={ () => {bookDetails.onClick(bookDetails.id)