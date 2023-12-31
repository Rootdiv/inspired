import { API_URL } from '@/const';
import style from './Product.module.scss';
import { NavLink } from 'react-router-dom';
import { ColorList } from '@/Components/Common/ColorList/ColorList';
import { BtnFavorites } from '@/Components/Common/BtnFavorites/BtnFavorites';
import { Img } from '@/Components/Common/Img/Img';

export const Product = ({ id, pic, title, price, colors }) => (
  <article className={style.product}>
    <NavLink to={`/product/${id}`} className={style.product}>
      <Img src={`${API_URL}/${pic}`} alt={title} className={style.image} />
      <h3 className={style.title}>{title}</h3>
    </NavLink>
    <div className={style.row}>
      <p className={style.price}>руб {price}</p>
      <BtnFavorites id={id} />
    </div>
    <ColorList colors={colors} />
  </article>
);
