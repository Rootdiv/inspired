import { useDispatch, useSelector } from 'react-redux';
import style from './CartItem.module.scss';
import { API_URL } from '@/const';
import cn from 'classnames';
import { Count } from '@/Components/Count/Count';
import { addToCart, removeFromCart } from '@/features/cartSlice';

export const CartItem = ({ id, color, size, count, goodsList }) => {
  const { colorList } = useSelector(state => state.colors);
  const dispatch = useDispatch();

  const item = goodsList.find(item => item.id === id) || {};
  const imageURL = item.pic ? `${API_URL}/${item.pic}` : '';

  const handleCountChange = count => {
    if (count > 1) {
      dispatch(addToCart({ id, color, size, count }));
    } else {
      dispatch(removeFromCart({ id, color, size }));
    }
  };

  const removeItem = () => {
    dispatch(removeFromCart({ id, color, size }));
  };

  return (
    <article className={style.item}>
      <img src={imageURL} alt={item.title} className={style.image} />
      <div className={style.content}>
        <h3 className={style.title}>{item.title}</h3>
        <p className={style.price}>руб {item.price}</p>
        <div className={style.vendorCode}>
          <span className={style.subtitle}>Артикул</span>
          <span>{id}</span>
        </div>
      </div>
      <div className={style.prop}>
        <div className={style.color}>
          <p className={cn(style.subtitle, style.colorTitle)}>Цвет</p>
          <div
            className={style.colorItem}
            style={{ '--data-color': colorList.find(item => item.title === color)?.code }}
          />
        </div>
        <div className={style.size}>
          <p className={cn(style.subtitle, style.sizeTitle)}>Цвет</p>
          <div className={style.sizeItem}>{size}</div>
        </div>
      </div>
      <button type="button" className={style.del} aria-label="Удалить товар из корзины" onClick={removeItem} />
      <Count
        className={style.count}
        count={count}
        handleDecrement={() => handleCountChange(count - 1)}
        handleIncrement={() => handleCountChange(count + 1)}
      />
    </article>
  );
};
