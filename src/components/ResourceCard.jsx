function ResourceCard(props) {
  return (
    <div className="card">
      <img
        src={props.image}
        alt={props.title}
        className="card-image"
      />

      <h2>{props.title}</h2>

      <p>{props.description}</p>
      
      <a
        href={props.link}
        target="_blank"
        rel="noreferrer"
      >
      <button className="card-btn">
        Learn More
        </button>
        </a>
    </div>
  );
}

export default ResourceCard;