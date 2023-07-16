import { Container } from '@/Components/Layout/Container/Container';
import { Product } from '@/Components/Product/Product';
import style from './Goods.module.scss';
import { useSelector } from 'react-redux';
import { Pagination } from '@/Components/Pagination/Pagination';

export const Goods = ({ title }) => {
  const { goodsList } = useSelector(state => state.goods);
  const { totalCount } = useSelector(state => state.goods);

  const counter = totalCount ? ` (${totalCount})` : '';

  return (
    <section className={style.goods}>
      <Container>
        <h2 className={style.title}>{title ? `${title}${counter}` : 'Новинки'}</h2>
        <ul className={style.list}>
          {goodsList.map(item => (
            <li key={item.id}>
              <Product {...item} />
            </li>
          ))}
        </ul>
        <Pagination />
      </Container>
    </section>
  );
};
