import style from './ColorLabel.module.scss';
import { Field } from 'formik';

export const ColorLabel = ({ color }) => (
  <label className={style.color} style={{ '--data-color': color?.code }}>
    <Field type="radio" name="color" value={color?.title} className={style.input} />
    <span className={style.colorCheck}></span>
  </label>
);
