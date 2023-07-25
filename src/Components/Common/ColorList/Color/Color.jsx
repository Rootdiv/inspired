import style from './Color.module.scss';
import cn from 'classnames';

export const Color = ({ color, check }) => (
  <li className={cn(style.color, check && style.colorCheck)} style={{ '--data-color': color }} />
);
