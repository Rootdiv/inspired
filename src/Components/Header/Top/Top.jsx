import { Container } from '@/Components/Layout/Container/Container';
import style from './Top.module.scss';
import cn from 'classnames';
import logo from '@/assets/logo.svg';
import { NavLink } from 'react-router-dom';
import { ReactComponent as SearchSvg } from '@/assets/search.svg';
import { ReactComponent as CartSvg } from '@/assets/cart.svg';
import { ReactComponent as FavoritesSvg } from '@/assets/heart.svg';

export const Top = () => (
  <div className={style.top}>
    <Container className={style.container}>
      <a className={cn(style.link, style.phone)} href="tel:89304902620">
        8 930 490 26 20
      </a>
      <NavLink to="/" className={style.logo}>
        <img src={logo} alt="Лого Inspired" />
      </NavLink>
      <div className={style.navigation}>
        <ul className={style.navList}>
          <li className={style.navItem}>
            <button type="button" className={style.link}>
              <SearchSvg />
            </button>
          </li>
          <li className={style.navItem}>
            <NavLink to="/cart" className={style.link}>
              <CartSvg />
            </NavLink>
          </li>
          <li className={style.navItem}>
            <NavLink to="/favorites" className={cn(style.link, style.favorites)}>
              <FavoritesSvg />
            </NavLink>
          </li>
        </ul>
      </div>
    </Container>
  </div>
);
