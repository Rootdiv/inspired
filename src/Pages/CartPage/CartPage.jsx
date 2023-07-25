import { Cart } from '@/Pages/CartPage/Cart/Cart';
import { Order } from '@/Pages/CartPage/Order/Order';
import { OrderModal } from '@/Pages/CartPage/OrderModal/OrderModal';
import { Preloader } from '@/Components/Common/Preloader/Preloader';
import { fetchCategory as fetchAll } from '@/features/goodsSlice';
import { setActiveGender } from '@/features/navigationSlice';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const CartPage = () => {
  const { cartItems, countItems, orderStatus } = useSelector(state => state.cart);
  const { status, goodsList } = useSelector(state => state.goods);
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);

  useEffect(() => {
    dispatch(setActiveGender(''));
  }, [dispatch]);

  useEffect(() => {
    if (count !== countItems) {
      dispatch(fetchAll({ list: cartItems.map(item => item.id), count: 'all' }));
      setCount(countItems);
    }
  }, [cartItems, count, countItems, dispatch]);

  return status === 'loading' ? (
    <Preloader />
  ) : (
    <>
      <Cart cartItems={cartItems} goodsList={goodsList} />
      {goodsList.length && <Order cartItems={cartItems} />}
      {orderStatus === 'success' && <OrderModal />}
    </>
  );
};
