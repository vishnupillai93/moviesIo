import { Link } from "react-router-dom";

function Card(props) {
  const { id, title, image, description } = props;
  // console.log(props);
  const handleOnClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  return (
    <div className="card">
      <div className="circle">
        <img src={image} alt={title} />
      </div>
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description.substring(0, 200)}...</p>
        {/* <a href={buttonLink}>{buttonLabel}</a> */}
      </div>
      <div className="card-more">
        <Link onClick={handleOnClick} to={`/search/${id}`}> Read More</Link>
      </div>
    </div>
  );
}

export default Card;
