import './Header.css';
import { Link } from 'react-router-dom';
import DropdownExampleDropdown from '../Dropdown/Dropdown';
import { useDispatch, useSelector } from 'react-redux';
import { clearSearchString, setSearchString } from '../../store/search/searchSlice';
import { useEffect } from 'react';
import { getCategories } from '../../store/category/categorySlice';

function Header() {
    const dispatch = useDispatch();
    const basket = useSelector((state) => state.basket);

    dispatch(clearSearchString);
    const searchHandler = (event) => {
        dispatch(setSearchString(event.target.value));
    };

    useEffect(() => {
        dispatch(getCategories());
    }, []);

    return (
        <div className="Header">
            <div className="Header-logo">
                <img className="Header-img" src="https://img.freepik.com/premium-vector/online-shop-logo-designs-template-illustration-vector-graphic-of-shopping-cart-and-shop-bag-logo-design-concept-perfect-sale-discount-or-store-web-element-company-emblem_520095-49.jpg?w=2000" alt="logo" />
                <div className="Header-search">
                    <input onChange={e => searchHandler(e)} name="search" id="search" type="text" placeholder="🔍 Search"/>
                </div>
            </div>
            <div className="Header-link">
                <Link to={'/'}>All goods</Link>
                <DropdownExampleDropdown />
                <Link to={'feed-back'}>Feed back</Link>
                <Link to={'basket'}>
                    <div className="Header-counter">{Object.values(basket).reduce((acc, item) => {
                        acc += item;
                        return acc;
                        }, 0)}
                    </div>
                    <img src="https://svgsilh.com/svg_v2/40016.svg" alt="basket"/>
                </Link>
                <Link to={'login'}>Login</Link>
                <Link to={'registration'}>Registration</Link>

            </div>
        </div>
    )
}


export default Header;
