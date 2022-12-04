import './App.css';
import { Routes, Route } from 'react-router-dom';

import IndexPage from './pages/Index/Index';
import RegistrationPage from './pages/Registration/Registration';
import DefaultLayout from './layout/DefaultLayout';
import ProductPage from './pages/Products/Product';
import CategoriesPage from './pages/Categories/Categories';
import BasketPage from './pages/Basket/Basket';
import FeedBackPage from './pages/FeedBack/FeedBack';
import LoginPage from './pages/Login/Login';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<DefaultLayout />}>
          <Route index element={<IndexPage />} />
          <Route path={'basket'} element={<BasketPage />} />
          <Route path={'products'}>
            <Route path={':productId'} element={<ProductPage />} />
          </Route>
          <Route path={':category'}>
            <Route path={':categoryName'} element={<CategoriesPage />} />
          </Route>
          <Route path={'feed-back'} element={<FeedBackPage />} />
          <Route path={'login'} element={<LoginPage />} />
          <Route path={'registration'} element={<RegistrationPage />} />
        </Route>
        
      </Routes>
    </div>
  );
}

export default App;
