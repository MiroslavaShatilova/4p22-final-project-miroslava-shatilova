import './Card.css';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToBasket, removeFromBasket } from '../../store/basket/basketSlice';

function Card({image, title, description, id, price}) {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.basket);

    const onBuyClick = (event) => {
      event.preventDefault();
      event.stopPropagation();
      dispatch(addToBasket(id));
    }

    const onDeleteClick = (event) => {
      event.preventDefault();
      event.stopPropagation();
      dispatch(removeFromBasket(id));
    }

    return (
      <Link to={`/products/${id}`} className="Card">
        <div className="Card-element">
          <img className="Card-img" src={image} alt={title}/>
          <div className="Card-container">
            <h2 className="Card-title">{title}</h2>
            <div className="Card-box">
              <p className="Card-description">{description}</p>
            </div>
            <div className="Card-price">{price} &#36;</div>
            <div className="Card-button">
              {!products[id] && <Button onClick={onBuyClick}>Buy</Button>}
              {products[id] && (
                <>
                  <Button onClick={onDeleteClick}>-</Button>
                  <span> {products[id]} </span>
                  <Button onClick={onBuyClick}>+</Button>
                </>
              )}
            </div>
          </div>
        </div>
      </Link>
    )
}

export default Card;