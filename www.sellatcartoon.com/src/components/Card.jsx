import { AiFillStar } from "react-icons/ai";
import './card.css'
import { BsFillBagFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Card = ({ img, title, reviews, prevPrice, newPrice,productId }) => {
  let star = <AiFillStar className="rating-star" />;
    return (
    <>
      <section className="card">
        <img src={img} alt={title} className="card-img" />
        <div className="card-details">
          <h3 className="card-title">{title}</h3>
          <section className="card-reviews">
            {star} {star} {star} {star}
            <span className="total-reviews">{reviews}</span>
          </section>
          <section className="card-price">
            <div className="price">
            ₹{parseInt(newPrice).toFixed(2)}
            </div>
            <Link to={`/editProduct/${productId}`}>
            <div className="bag-icon">
              Edit
            </div>
            </Link>
          </section>
        </div>
      </section>
    </>
  );
};

export default Card;