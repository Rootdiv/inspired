import { Container } from '@/Components/Layout/Container/Container';
import { Gender } from './Gender/Gender';
import { Category } from './Category/Category';
import style from './Navigation.module.scss';

export const Navigation = () => (
  <nav className={style.navigation}>
    <Container>
      <Gender />
      <Category />
    </Container>
  </nav>
);
