import './SearchBar.css'

function SearchBar() {
    return (
        <form className="search-bar-form">
            <input
                type="text"
                placeholder="Search..."
                className="search-input"
            />
        </form>
    );
}

export default SearchBar;