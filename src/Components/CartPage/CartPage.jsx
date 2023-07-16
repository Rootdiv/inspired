import { Cart } from '@/Components/CartPage/Cart/Cart';
import { Order } from '@/Components/CartPage/Order/Order';
import { fetchCategory as fetchAll } from '@/features/goodsSlice';
import { setActiveGender } from '@/features/navigationSlice';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const CartPage = () => {
  const { cartItems, countItems } = useSelector(state => state.cart);
  const { goodsList } = useSelector(state => state.goods);
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

  return (
    <>
      <Cart cartItems={cartItems} goodsList={goodsList} />
      <Order cartItems={cartItems} />
    </>
  );
};
