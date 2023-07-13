import style from './Pagination.module.scss';
import cn from 'classnames';
import { ReactComponent as PrevSvg } from '@/assets/prev.svg';
import { ReactComponent as NextSvg } from '@/assets/next.svg';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import { setPage } from '@/features/goodsSlice';

export const Pagination = () => {
  const pathname = useLocation().pathname;
  const { page, pages, totalCount } = useSelector(state => state.goods);
  const dispatch = useDispatch();

  const handlePageChange = newPage => {
    dispatch(setPage(newPage));
  };

  const handlePrevPage = () => {
    if (page > 1) {
      handlePageChange(page - 1);
    }
  };

  const handleNextPage = () => {
    if (page < pages) {
      handlePageChange(page + 1);
    }
  };

  const renderPaginationItems = () => {
    const paginationItems = [];
    let startPage = Math.max(1, page - 1);
    let endPage = Math.min(startPage + 2, pages);
    if (startPage + 1 === endPage) {
      startPage = Math.max(1, page - 2);
    }

    for (let i = startPage; i <= endPage; i++) {
      paginationItems.push(
        <li key={i} className={style.item}>
          <NavLink
            to={`${pathname}?page=${i}`}
            className={cn(style.link, i === page && style.linkActive)}
            onClick={() => handlePageChange(i)}>
            {i}
          </NavLink>
        </li>,
      );
    }

    return paginationItems;
  };

  return (
    totalCount && (
      <div className={style.pagination}>
        <button type="button" className={style.arrow} onClick={handlePrevPage} disabled={page <= 2}>
          <PrevSvg />
        </button>
        <ul className={style.list}>{renderPaginationItems()}</ul>
        <button
          type="button"
          className={style.arrow}
          onClick={handleNextPage}
          disabled={page >= pages - 1 || pages <= 3}>
          <NextSvg />
        </button>
      </div>
    )
  );
};
