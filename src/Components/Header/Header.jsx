import { Navigation } from '@/Components/Header/Navigation/Navigation';
import { Top } from '@/Components/Header/Top/Top';
import style from './Header.module.scss';
import { Search } from '@/Components/Search/Search';

export const Header = () => (
  <header className={style.header}>
    <Top />
    <Search />
    <Navigation />
  </header>
);
