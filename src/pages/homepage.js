import { Link } from 'react-router-dom';
import '../ui/homepage.css'; 
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className='wrapper'>
          <div className="container">
          <h1 className="title">Welcome to Movie Time!</h1>
          <p className="subtitle">Explore our extensive collection of movies from all genres.</p>
          <Link to="/search" className="button">View All Movies</Link>
          </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;