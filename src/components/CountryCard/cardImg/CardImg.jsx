function CardImg({ flag, name, handleViewDetails }) {
  return (
    <img
      className="country-card__img"
      src={flag}
      alt={name}
      onClick={handleViewDetails}
    />
  );
}

export default CardImg;
