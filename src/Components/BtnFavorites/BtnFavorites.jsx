import { useDispatch, useSelector } from 'react-redux';
import style from './BtnFavorites.module.scss';
import { ReactComponent as FavoritesSvg } from '@/assets/heart.svg';
import { addToFavorites, removeFromFavorites } from '@/features/favoritesSlice';
import cn from 'classnames';

export const BtnFavorites = ({ id }) => {
  const dispatch = useDispatch();
  const isFavorites = useSelector(state => state.favorites.includes(id));

  const handleToggleFavorites = () => {
    if (isFavorites) {
      dispatch(removeFromFavorites({ id }));
    } else {
      dispatch(addToFavorites({ id }));
    }
  };

  return (
    <button
      type="button"
      className={cn(style.favorites, isFavorites && style.active)}
      aria-label="Добавить в избранное"
      onClick={handleToggleFavorites}>
      <FavoritesSvg />
    </button>
  );
};
