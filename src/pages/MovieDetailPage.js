import { useParams } from 'react-router-dom';
import Navbar from "../Components/Navbar";
import CardList from "../Components/CardList";
import Footer from "../Components/Footer";
import MovieDetail from "../Components/MovieDetail";

const MovieDetailPage=()=>{
    const { id } = useParams();
    return (
        <div className='body'>
            <Navbar />
            <MovieDetail id={id} />
            <Footer />
        </div>
    );
}

export default MovieDetailPage;