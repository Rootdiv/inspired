import { Container } from '@/Components/Layout/Container/Container';
import style from './ProductPage.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchProduct } from '@/features/productSlice';
import { useParams } from 'react-router-dom';
import { API_URL } from '@/const';
import cn from 'classnames';
import { ColorList } from '@/Components/ColorList/ColorList';
import { ReactComponent as LikeSvg } from '@/assets/heart.svg';
import { Count } from '@/Components/Count/Count';
import { setActiveGender } from '@/features/navigationSlice';
import { ProductSize } from '@/Components/ProductPage/ProductSize/ProductSize';
import { Goods } from '@/Components/Goods/Goods';
import { fetchCategory } from '@/features/goodsSlice';

export const ProductPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const {
    product: { pic, title, price, colors, size, description, gender, category },
  } = useSelector(state => state.product);

  useEffect(() => {
    dispatch(fetchProduct(id));
  }, [id, dispatch]);

  useEffect(() => {
    dispatch(setActiveGender(gender));
  }, [gender, dispatch]);

  useEffect(() => {
    const recommended = { count: 4, top: true, exclude: id };
    dispatch(fetchCategory({ gender, category, ...recommended }));
  }, [gender, category, id, dispatch]);

  const [count, setCount] = useState(1);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };
  const handleDecrement = () => {
    if (count > 1) {
      setCount(prevCount => prevCount - 1);
    }
  };

  const handleColorChange = event => {
    setSelectedColor(event.target.value);
  };

  const handleSizeChange = event => {
    setSelectedSize(event.target.value);
  };

  return (
    <>
      <section className={style.card}>
        <Container className={style.container}>
          <img src={pic ? `${API_URL}/${pic}` : ''} alt={title} className={style.image} />
          <form className={style.content}>
            <h2 className={style.title}>{title}</h2>
            <p className={style.price}>руб {price}</p>
            <div className={style.vendorCode}>
              <span className={style.subtitle}>Артикул</span>
              <span className={style.id}>{id}</span>
            </div>
            <div className={style.color}>
              <p className={cn(style.subtitle, style.colorTitle)}>Цвет</p>
              <ColorList colors={colors} selectedColor={selectedColor} handleColorChange={handleColorChange} />
            </div>
            <ProductSize size={size} selectedSize={selectedSize} handleSizeChange={handleSizeChange} />
            <div className={style.description}>
              <p className={cn(style.subtitle, style.descriptionTitle)}>Описание</p>
              <p className={style.descriptionText}>{description}</p>
            </div>
            <div className={style.control}>
              <Count
                className={style.count}
                count={count}
                handleIncrement={handleIncrement}
                handleDecrement={handleDecrement}
              />
              <button type="submit" className={style.addCart}>
                В корзину
              </button>
              <button type="button" className={style.favorite} aria-label="Добавить в избранное">
                <LikeSvg />
              </button>
            </div>
          </form>
        </Container>
      </section>
      <Goods title="Вам также может понравиться" />
    </>
  );
};
