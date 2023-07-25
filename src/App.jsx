import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Root } from '@/routes/Root';
import { MainPage } from '@/Pages/MainPage/MainPage';
import { ErrorPage } from '@/Pages/ErrorPage/ErrorPage';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchNavigation } from '@/features/navigationSlice';
import { fetchColors } from '@/features/colorsSlice';
import { ProductPage } from '@/Pages/ProductPage/ProductPage';
import { FavoritesPage } from '@/Pages/FavoritesPage/FavoritesPage';
import { CartPage } from '@/Pages/CartPage/CartPage';
import { SearchPage } from '@/Pages/SearchPage/SearchPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<MainPage />} />
      <Route path="catalog/:gender/:category?" element={<MainPage />} />
      <Route path="product/:id" element={<ProductPage />} />
      <Route path="favorites" element={<FavoritesPage />} />
      <Route path="cart" element={<CartPage />} />
      <Route path="search" element={<SearchPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>,
  ),
);

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNavigation());
    dispatch(fetchColors());
  }, [dispatch]);

  return <RouterProvider router={router} />;
};
