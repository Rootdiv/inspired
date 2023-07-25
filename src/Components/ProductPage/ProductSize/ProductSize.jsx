import { Field } from 'formik';
import style from './ProductSize.module.scss';

export const ProductSize = ({ size }) => (
  <div className={style.size}>
    <p className={style.title}>Размер</p>
    <div className={style.list}>
      {size.map(item => (
        <label key={item} className={style.item}>
          <Field type="radio" name="selectedSize" value={item} className={style.input} />
          <span className={style.check}>{item}</span>
        </label>
      ))}
    </div>
  </div>
);
