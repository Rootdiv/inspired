import { Container } from '@/Components/Layout/Container/Container';
import style from './Top.module.scss';
import cn from 'classnames';
import logo from '@/assets/logo.svg';
import { ReactComponent as SearchSvg } from '@/assets/search.svg';
import { ReactComponent as CartSvg } from '@/assets/cart.svg';
import { ReactComponent as FavoritesSvg } from '@/assets/favorites.svg';

export const Top = () => (
  <div className={style.top}>
    <Container className={style.topContainer}>
      <a className={cn(style.topLink, style.topPone)} href="tel:89304902620">
        8 930 490 26 20
      </a>
      <a href="/" className={style.topLogo}>
        <img src={logo} alt="Лого Inspired" />
      </a>
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
