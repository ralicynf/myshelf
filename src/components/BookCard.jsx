const BookCard = (bookDetails) => {


    return (
        <section>
        <div className='hello'>
            <div className="book-card" onClick={ () => {bookDetails.onClick(bookDetails.id)}}>
                <div>
                    {bookDetails.completed === true ? (
                        <div className="book-names rotate-text" style={{backgroundColor:"#242e3f"}}>
                            <h2>{bookDetails.title}</h2>
                        </div>
                    ) : (
                        <div className="book-names rotate-text" 
                            style={{backgroundColor: "#274472"}}>
                            <h2>{bookDetails.title}</h2>
                        </div>
                        )}
                    
                </div>
            </div>
        </div>
        </section>
    )
}

export default BookCard