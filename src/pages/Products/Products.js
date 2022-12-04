
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Card from '../../components/Card/Card';
import { getProducts } from '../../store/products/productsSlice';


function ProductsPage() {
    const dispatch = useDispatch();
    const currentCategory = useParams();
    let [products, isLoading] = useSelector((state) => [state.products.entities, state.products.loading]);

    const [searchString, searchStringIsEmpty] = useSelector((state) => [state.search.searchString, state.search.isEmpty]);

    useEffect(() => {
        dispatch(getProducts());
    }, []);

    if (currentCategory.categoryName) {
        products = products.filter((item) => item.category === currentCategory.categoryName)
    }

    if (!searchStringIsEmpty) {
        products = products.filter((item) => item.title.indexOf(searchString) !== -1)
    }

    return (
        <div className="Index-container">
            {
                !isLoading && products.map((item, index) => {
                    return <Card key={index} title={item.title} description={item.description} id={item.id} image={item.image} price={item.price} />;
                })
            }
            {
                isLoading && (
                    <h2>Loading...</h2>
                )
            }
        </div>
    )
}

export default ProductsPage;