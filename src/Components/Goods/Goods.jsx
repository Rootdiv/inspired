import { Container } from '@/Components/Layout/Container/Container';
import { Product } from '@/Components/Product/Product';
import style from './Goods.module.scss';
import { useSelector } from 'react-redux';
import { Pagination } from '@/Components/Common/Pagination/Pagination';
import { Preloader } from '@/Components/Common/Preloader/Preloader';

export const Goods = ({ title, noCounter = false }) => {
  const { status, goodsList } = useSelector(state => state.goods);
  const { totalCount } = useSelector(state => state.goods);

  const counter = totalCount || goodsList.length;

  return (
    <section className={style.goods}>
      <Container>
        {status === 'loading' ? (
          <Preloader />
        ) : (
          <>
            <h2 className={style.title}>
              {title ?? 'Новинки'}
              {counter > 0 && title && !noCounter && <sup>&nbsp;({counter})</sup>}
            </h2>
            <ul className={style.list}>
              {goodsList.map(item => (
                <li key={item.id}>
                  <Product {...item} />
                </li>
              ))}
            </ul>
            <Pagination />
          </>
        )}
      </Container>
    </section>
  );
};
