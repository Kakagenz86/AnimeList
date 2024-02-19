const Pagination = ({page, lastPage, setPage}) => {
    const scrollTop = () => {
        window.scrollTo(
            {
                top: 0,
                behavior: 'smooth'
            }
        )
    }
    const handleNextPage = () => {
        if (page < lastPage) {
            setPage(page + 1)
        } else if (page === 0) {
            setPage(page + 1)
        } else {
            return 1
        }
        scrollTop()
    }

    const handlePrevPage = () => {
        if (page > 1) {
            setPage(page - 1)
        } else if (page === 1) {
            setPage(page - 1)
        }  else {
            return lastPage
        }
        scrollTop()
    }
    return (
        <div className="flex justify-center items-center py-4 px-2 gap-4 text-white text-2xl">
            <button onClick={handlePrevPage} className="transition-all hover:text-color-accent">Prev</button>
            <p>{page} of {lastPage}</p>
            <button onClick={handleNextPage} className="transition-all hover:text-color-accent">Next</button>
        </div>
    );
}

export default Pagination;