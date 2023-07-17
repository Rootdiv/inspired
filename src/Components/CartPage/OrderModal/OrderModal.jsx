import { useDispatch, useSelector } from 'react-redux';
import style from './OrderModal.module.scss';
import { API_URL } from '@/const';
import { clearCart } from '@/features/cartSlice';

export const OrderModal = () => {
  const {
    order: { values, order, id, totalPrice },
  } = useSelector(state => state.cart);
  const { goodsList } = useSelector(state => state.goods);
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(clearCart());
  };

  const handleModalClick = event => {
    event.stopPropagation();
  };

  return (
    <div className={style.modal} onClick={handleCloseModal}>
      <div className={style.body} onClick={handleModalClick}>
        <h2 className={style.title}>Заказ оформлен №{id}</h2>
        <div className={style.description}>
          <p>Спасибо за выбор нашего магазина!</p>
          <p>Здесь вы можете посмотреть все детали вашего заказа.</p>
        </div>
        <ul className={style.customer}>
          <li className={style.customerItem}>
            <span className={style.customerTitle}>Получатель</span>
            <span className={style.customerData}>{values.fio}</span>
          </li>
          {values.delivery === 'delivery' && (
            <li className={style.customerItem}>
              <span className={style.customerTitle}>Адрес доставки</span>
              <span className={style.customerData}>{values.address}</span>
            </li>
          )}
          <li className={style.customerItem}>
            <span className={style.customerTitle}>Телефон</span>
            <span className={style.customerData}>{values.phone}</span>
          </li>
          <li className={style.customerItem}>
            <span className={style.customerTitle}>E-mail</span>
            <span className={style.customerData}>{values.email}</span>
          </li>
          <li className={style.customerItem}>
            <span className={style.customerTitle}>Способ получения</span>
            <span className={style.customerData}>{values.delivery === 'self' ? 'Самовывоз' : 'Доставка'}</span>
          </li>
        </ul>
        <ul className={style.goods}>
          {order.map(item => {
            const product = goodsList.find(product => product.id === item.id);
            const imageURL = product.pic ? `${API_URL}/${product.pic}` : '';
            return (
              <li key={`${item.id}-${item.color}-${item.size}`} className={style.goodsItem}>
                <img src={imageURL} alt={product.title} className={style.goodsImg} />
                <p className={style.goodsCount}>X{item.count}</p>
              </li>
            );
          })}
        </ul>
        <div className={style.total}>
          <p>Итого:</p>
          <p>руб {totalPrice}</p>
        </div>
        <button className={style.close} type="button" aria-label="Закрыть модальное окно" onClick={handleCloseModal} />
      </div>
    </div>
  );
};
