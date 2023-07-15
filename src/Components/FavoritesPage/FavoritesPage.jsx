import { useEffect } from 'react';
import { Goods } from '@/Components/Goods/Goods';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategory as fetchFavorites } from '@/features/goodsSlice';
import { usePageFromSearchParam } from '@/hooks/usePageFromSearchParam';
import { setActiveGender } from '@/features/navigationSlice';

export const FavoritesPage = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites);
  const page = usePageFromSearchParam(dispatch);

  useEffect(() => {
    const param = { list: favorites };

    if (page) {
      param.page = page;
    }

    dispatch(fetchFavorites(param));
    dispatch(setActiveGender(''));
  }, [favorites, page, dispatch]);

  return <Goods title="Избранное" />;
};
