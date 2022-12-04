
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Card from '../../components/Card/Card';


function ProductsPage() {
    const currentCategory = useParams();
    let [products, isLoading] = useSelector((state) => [state.products.entities, state.products.loadind]);
    const [searchString, searchStringIsEmpty] = useSelector((state) => [state.search.searchString, state.search.isEmpty]);

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