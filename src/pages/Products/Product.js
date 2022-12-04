import { useEffect, useState } from 'react';
import './Product.css';
import Button from '../../components/Button/Button';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToBasket, removeFromBasket } from '../../store/basket/basketSlice';

function ProductPage() {
    const {productId} = useParams();
    const dispatch = useDispatch();
    const products = useSelector((state) => state.basket);
    const [product, setProduct] = useState({});

    const onBuyClick = (event) => {
      event.preventDefault();
      event.stopPropagation();
      dispatch(addToBasket(productId));
    }

    const onDeleteClick = (event) => {
      event.preventDefault();
      event.stopPropagation();
      dispatch(removeFromBasket(productId));
    }

    useEffect(() => {
        (async() => {
            const response = await fetch(`https://fakestoreapi.com/products/${productId}`)
                    const result = await response.json();

                    setProduct(result);
        })();
    }, [productId])

   
    return (
        <div className="Product-container">
            <div className="Product-box">
               <h1 className="Product-title">{product.title}</h1>
                <img src={product.image} alt={product.title}></img>
                <p>{product.description}</p>
            </div>
            <div className="Product-price">
                <p>{product.price} &#36;</p>
                <div>
                  {!products[productId] && <Button onClick={onBuyClick}>Buy</Button>}
                {products[productId] && (
                  <>
                    <Button onClick={onDeleteClick}>-</Button>
                    <span>  {products[productId]}  </span>
                    <Button onClick={onBuyClick}>+</Button>
                  </>
                )}
              </div>
            </div>
        </div>
    )
}

export default ProductPage;