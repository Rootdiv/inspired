import style from './Development.module.scss';

export const Development = () => (
  <div className={style.development}>
    <ul className={style.developmentList}>
      <li>
        Designer:{' '}
        <a className={style.link} href="#">
          Anastasia Ilina
        </a>
      </li>
      <li>
        Developer:{' '}
        <a className={style.link} href="mailto:web-master@rootdiv.ru">
          Владимир
        </a>
      </li>
    </ul>
  </div>
);
