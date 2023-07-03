import style from './Category.module.scss';
import cn from 'classnames';

export const Category = () => {
  const categoryList = {
    women: ['Бюстгальтеры', 'Трусы', 'Носки', 'Халаты', 'Термобелье', 'Пижамы'],
    men: ['Трусы', 'Носки', 'Халаты', 'Термобелье'],
  };
  return (
    <div className={style.category}>
      <h2 className={cn(style.title, style.categoryTitle)}>Каталог</h2>
      <ul className={style.categoryList}>
        <li className={style.categoryListItem}>
          <h3 className={style.categorySubtitle}>Женщины</h3>
          <ul className={style.categorySublist}>
            {categoryList.women.map((category, i) => (
              <li key={i} className={style.categorySubitem}>
                <a className={style.link} href="#">
                  {category}
                </a>
              </li>
            ))}
          </ul>
        </li>
        <li className={style.categoryListItem}>
          <h3 className={style.categorySubtitle}>Мужчины</h3>
          <ul className={style.categorySublist}>
            {categoryList.men.map((category, i) => (
              <li key={i} className={style.categorySubitem}>
                <a className={style.link} href="#">
                  {category}
                </a>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
};
