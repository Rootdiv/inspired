import { useEffect } from 'react';
import { Goods } from '@/Components/Goods/Goods';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategory as fetchFavorites } from '@/features/goodsSlice';
import { usePageFromSearchParam } from '@/hooks/usePageFromSearchParam';
import { setActiveGender } from '@/features/navigationSlice';
import style from './FavoritePage.module.scss';
import { Container } from '@/Components/Layout/Container/Container';
import { useNavigate } from 'react-router-dom';

export const FavoritesPage = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites);
  const page = usePageFromSearchParam(dispatch);
  const navigate = useNavigate();

  useEffect(() => {
    const param = { list: favorites };

    const isLastPage = page === Math.ceil((favorites.length + 1) / 12);
    if (page > 1 && favorites.length % 12 === 0 && isLastPage) {
      navigate(`/favorites?page=${page - 1}`);
    }

    if (page) {
      param.page = page;
    }

    dispatch(fetchFavorites(param));
    dispatch(setActiveGender(''));
  }, [favorites, page, navigate, dispatch]);

  return favorites.length ? (
    <Goods title="Избранное" />
  ) : (
    <section>
      <Container>
        <h2 className={style.title}>Избранное</h2>
        <p className={style.empty}>Сейчас в избранное ничего не добавлено</p>
      </Container>
    </section>
  );
};
