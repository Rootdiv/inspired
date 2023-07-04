import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import style from './Category.module.scss';

const list = [
  {
    link: 'women',
    title: 'Женщины',
    categories: [
      { link: 'bras', title: 'Бюстгальтеры' },
      { link: 'panties', title: 'Трусы' },
      { link: 'socks', title: 'Носки' },
      { link: 'bathrobes', title: 'Халаты' },
      { link: 'thermal', title: 'Термобелье' },
      { link: 'pajamas', title: 'Пижамы' },
    ],
  },
  {
    link: 'men',
    title: 'Мужчины',
    categories: [
      { link: 'panties', title: 'Трусы' },
      { link: 'socks', title: 'Носки' },
      { link: 'bathrobes', title: 'Халаты' },
      { link: 'thermal', title: 'Термобелье' },
    ],
  },
];

export const Category = () => {
  const location = useLocation();
  const gender = location.pathname.slice(1);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (list[0].link === gender) {
      setIndex(0);
    } else {
      setIndex(1);
    }
  }, [gender]);

  return (
    <ul className={style.category}>
      {list[index].categories.map(category => (
        <li key={category.link}>
          <NavLink className={style.link} to={`${list[index].link}/${category.link}`}>
            {category.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
