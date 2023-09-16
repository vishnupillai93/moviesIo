import Card from './Card';
// import '../ui/CardList.css';
import '../ui/CardList.css';
function CardList(props) {
  const { cards } = props;
  const getPosterURL=(posterPath)=>{
    return `https://www.themoviedb.org/t/p/w220_and_h330_face${posterPath}`
  }
  return (
    <div className="card-list">
      {cards.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          title={card.title}
          image={getPosterURL(card.poster_path)}
          description={card.overview}
          // buttonLabel={card.buttonLabel}
          // buttonLink={card.buttonLink}
        />
      ))}
    </div>
  );
}

export default CardList;
