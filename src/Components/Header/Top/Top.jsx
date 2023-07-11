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
    <Container className={style.topContainer}>
      <a className={cn(style.topLink, style.topPhone)} href="tel:89304902620">
        8 930 490 26 20
      </a>
      <NavLink to="/" className={style.topLogo}>
        <img src={logo} alt="Лого Inspired" />
      </NavLink>
      <div className={style.topNavigation}>
        <ul className={style.topNavList}>
          <li className={style.topNavItem}>
            <button type="button" className={style.topLink}>
              <SearchSvg />
            </button>
          </li>
          <li className={style.topNavItem}>
            <a className={style.topLink}>
              <CartSvg />
            </a>
          </li>
          <li className={style.topNavItem}>
            <a className={style.topLink}>
              <FavoritesSvg />
            </a>
          </li>
        </ul>
      </div>
    </Container>
  </div>
);
