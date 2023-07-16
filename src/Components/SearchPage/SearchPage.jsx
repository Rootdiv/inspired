import { Goods } from '@/Components/Goods/Goods';
import { Container } from '@/Components/Layout/Container/Container';
import { fetchCategory as fetchAll } from '@/features/goodsSlice';
import { useDispatch, useSelector } from 'react-redux';
import style from './SearchPage.module.scss';
import { useEffect } from 'react';
import { toggleSearch } from '@/features/searchSlice';
import { setActiveGender } from '@/features/navigationSlice';

export const SearchPage = () => {
  const { goodsList } = useSelector(state => state.goods);
  const { search } = useSelector(state => state.search);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAll({ search, count: 'all' }));
    dispatch(setActiveGender(''));
    dispatch(toggleSearch());
  }, [search, dispatch]);

  return goodsList.length ? (
    <Goods title="Результаты поиска" />
  ) : (
    <section>
      <Container>
        <h2 className={style.title}>Результаты поиска</h2>
        <p className={style.empty}>По Вашему запросу ничего не найдено</p>
      </Container>
    </section>
  );
};
