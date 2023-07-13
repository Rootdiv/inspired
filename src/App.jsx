import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Root } from '@/routes/Root';
import { MainPage } from '@/Components/MainPage/MainPage';
import { ErrorPage } from '@/Components/ErrorPage/ErrorPage';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchNavigation } from '@/features/navigationSlice';
import { fetchColors } from '@/features/colorsSlice';
import { ProductPage } from '@/Components/ProductPage/ProductPage';
import { FavoritesPage } from '@/Components/FavoritesPage/FavoritesPage';
import { CartPage } from '@/Components/CartPage/CartPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<MainPage />} />
      <Route path="catalog/:gender/:category?" element={<MainPage />} />
      <Route path="product/:id" element={<ProductPage />} />
      <Route path="favorites" element={<FavoritesPage />} />
      <Route path="cart" element={<CartPage />} />
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
