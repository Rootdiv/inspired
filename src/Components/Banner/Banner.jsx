import { Container } from '@/Components/Layout/Container/Container';
import style from './Banner.module.scss';
import { NavLink } from 'react-router-dom';
import { API_URL } from '@/const';
import { useMedia } from 'react-use';
import { useEffect, useState } from 'react';

export const Banner = ({ data }) => {
  const [image, setImage] = useState('');
  const isMobile = useMedia('(max-width: 540px)');
  const isTablet = useMedia('(max-width: 768px)');
  const isLaptop = useMedia('(max-width: 1024px)');

  //Если backgroundImage === '', то атрибута style нет.
  const backgroundImage = image ? `url(${API_URL}/${image})` : '';

  useEffect(() => {
    if (isMobile) {
      setImage(data?.bg.mobile);
    } else if (isTablet) {
      setImage(data?.bg.tablet);
    } else if (isLaptop) {
      setImage(data?.bg.laptop);
    } else {
      setImage(data?.bg.desktop);
    }
  }, [isMobile, isTablet, isLaptop, data?.bg]);

  return (
    data && (
      <section className={style.banner} style={{ backgroundImage }}>
        <Container>
          <div className={style.content}>
            <h2 className={style.title}>{data.description}</h2>
            <NavLink className={style.link} to={`/product/${data.id}`}>
              Перейти
            </NavLink>
          </div>
        </Container>
      </section>
    )
  );
};
