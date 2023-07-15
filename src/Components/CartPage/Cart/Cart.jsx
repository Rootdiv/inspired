import { Container } from '@/Components/Layout/Container/Container';
import style from './Cart.module.scss';
import { CartItem } from '@/Components/CartPage/Cart/CartItem/CartItem';

export const Cart = ({ cartItems, goodsList }) => {
  const totalPrice = cartItems.reduce((total, item) => {
    const itemList = goodsList.find(cartItem => cartItem.id === item.id);
    return itemList && itemList?.price * item.count + total;
  }, 0);

  return (
    <section className={style.cart}>
      <Container>
        <h2 className={style.title}>Корзина</h2>
        {goodsList.length && totalPrice ? (
          <ul className={style.list}>
            {cartItems.map(item => (
              <li key={`${item.id}-${item.color}-${item.size}`} className={style.item}>
                <CartItem {...item} goodsList={goodsList} />
              </li>
            ))}
          </ul>
        ) : (
          <p className={style.empty}>Сейчас товаров в корзине нет</p>
        )}
        <div className={style.total}>
          <p>Итого:</p>
          <p>руб {totalPrice}</p>
        </div>
      </Container>
    </section>
  );
};
