import { Container } from '@/Components/Layout/Container/Container';
import style from './Search.module.scss';
import { useSelector } from 'react-redux';

export const Search = () => {
  const { openSearch } = useSelector(state => state.search);
  return (
    openSearch && (
      <div className={style.search}>
        <Container>
          <form className={style.form}>
            <input type="search" name="search" placeholder="Найти..." className={style.input} />
            <button type="submit" className={style.btn}>
              Искать
            </button>
          </form>
        </Container>
      </div>
    )
  );
};
