import { API_URL } from '@/const';
import style from './Product.module.scss';
import { NavLink } from 'react-router-dom';
import { ReactComponent as LikeSvg } from '@/assets/heart.svg';
import { ColorList } from '@/Components/ColorList/ColorList';

export const Product = ({ id, pic, title, price, colors }) => (
  <article className={style.product}>
    <NavLink href={`product/${id}`} className={style.product}>
      <img src={`${API_URL}/${pic}`} alt="" className={style.image} />
      <h3 className={style.title}>{title}</h3>
    </NavLink>
    <div className={style.row}>
      <p className={style.price}>руб {price}</p>
      <button className={style.favorite}>
        <LikeSvg />
      </button>
    </div>
    <ColorList colors={colors} />
  </article>
);
