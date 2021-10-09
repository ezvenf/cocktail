import { React, useState } from "react";
import { useEffect } from "react/cjs/react.development";
import Grid from "./grid";

const SearchField = () => {
    // Hooks
    const [search, setSearch] = useState('');
    const [searchData, setSearchData] = useState([]);
    const [result, setResult] = useState([]);
    const [loading, setLoading] = useState(true);


    // Fetch API data
    useEffect(() => {
        setSearchData([]);
        fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a")
            .then((data) => data.json())
            .then(data => {
                setResult([...data.drinks]);
                setLoading(false);
            })
            .catch(error => console.log(error));

    }, []);

    // Form Submit Handler Function
    const submitHandler = (e) => {
        e.preventDefault();
        console.log(search);

        // Fetch Search Data
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)
            .then((data) => data.json())
            .then(data => setSearchData([...data.drinks]))
            .catch(error => console.log(error));

        console.log(searchData);
    }

    return <>
        <a href="#"><h1 className="text-center" onClick={() => window.location.reload()}>Cocktail</h1></a>
        {/* TextField */}
        <form onSubmit={submitHandler} className="text-center">
            <input type="text"
                value={search}
                name="search" id="search"
                className="searchInput" autoComplete="off"
                autoFocus={true} placeholder="Search"
                onChange={(e) => setSearch(e.target.value)}
            />
            <button type="submit">Search</button>
        </form>

        {/* Grid */}
        <section className="grid">
            {loading && <h1>Loading...</h1>}
            {searchData.length > 0 ? <Grid Data={searchData} /> : <Grid Data={result} />}
        </section>

    </>
};

export default SearchField;