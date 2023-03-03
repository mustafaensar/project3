import star from "../images/star.png"

function Card(props){

  let badgeText;
  if(props.data.openSpots === 0){
    badgeText = "Sold Out";
  }
  else{
    badgeText = "Online";
  }

  return(
    <div className="card">
      <div className="card-badge">{badgeText}</div>
      <img src={process.env.PUBLIC_URL + "/images/" + props.data.coverImg} alt="" className="card-img"></img>

      <div className="card-stats">
        <img src={star} alt="star" className="card-rating-icon"></img>
        <span className="card-rating">{(props.data.stats.rating).toFixed(1)}</span>
        <span className="gray">({props.data.stats.reviewCount})</span>
        <span className="gray">{props.data.location}</span>
      </div>
      <p>{props.data.title}</p>
      <p><span className="bold">From ${props.data.price} /</span> person</p>
    </div>
  )
}

export default Card;