import { useSelector } from "react-redux";
import './Basket.css';
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";



function BasketPage() {

    const products = useSelector(state => state.products.entities);
    const basket = useSelector(state => state.basket);
    const productsInBasket = products
        .filter((product) => basket[product.id])
        .map((item) => {
            return {
                'product' : item,
                'count' : basket[item.id],
            };
        });

    console.log(productsInBasket);
    return(
        <div className="Basket">
        <div className="Basket-container">
            { products
                .filter((product) => basket[product.id])
                .map((item, index) => {
                    return <Card key={index} title={item.title} description={item.description} id={item.id} image={item.image} price={item.price} />;
                })

            }
        </div> 
        <div className="Basket-price">
            <h2>Total price</h2>
            <div className="Basket-acc">
                { products.reduce((acc, product) => {
                if(basket[product.id]) {

                
                acc += product.price * basket[product.id];
                }
                return acc;
                }, 0) } &#36;
            </div>
        </div>
        <div className="Basket-button">
            <Button>Place an order</Button>
        </div>
        </div>
    )
}

export default BasketPage;