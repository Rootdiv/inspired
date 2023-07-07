import { Navigation } from '@/Components/Header/Navigation/Navigation';
import { Top } from '@/Components/Header/Top/Top';
import style from './Header.module.scss';

export const Header = () => (
  <header className={style.header}>
    <Top />
    <Navigation />
  </header>
);
