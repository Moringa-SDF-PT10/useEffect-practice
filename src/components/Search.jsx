export default function Search({fetchRandomUser, fetchAllUsers}) {
    return (
        <div className="search">
            <input className="search-number" type="button" value="Get Random User" onClick={() => fetchRandomUser()}/>
            <input className="search-number" type="button" value="Get All Users" onClick={() => fetchAllUsers()}/>
        </div>
    )
}
