import Navbar from "../Components/Navbar";
import SearchBar from "../Components/Searchbar";
import CardList from "../Components/CardList";
import Footer from "../Components/Footer";
import { useState } from "react";

const SearchPage=()=>{
    const [movies,setMovies]=useState([]);
    const handleMovies=(movies)=>{
        setMovies(movies);
    }
    return (
        <>
            <div className="body">
                <Navbar />
                <SearchBar handleMovies={handleMovies} />
                <CardList cards={movies} />
                <Footer />
            </div>
        </>
    );
}

export default SearchPage;