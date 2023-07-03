import { Container } from '@/Components/Layout/Container/Container';
import style from './Footer.module.scss';
import { ReactComponent as VkSvg } from '@/assets/vk.svg';
import { ReactComponent as FacebookSvg } from '@/assets/facebook.svg';
//import cn from 'classnames';

export const Footer = () => (
  <footer className={style.footer}>
    <Container className={style.container}>
      <div className={style.category}>
        <h2 className={style.categoryTitle}>Каталог</h2>
        <ul className={style.categoryList}>
          <li className={style.categoryListItem}>
            <h3 className={style.categorySubtitle}>Женщины</h3>
            <ul className={style.categorySublist}>
              <li className={style.categorySubitem}>
                <a className={style.link} href="#">
                  Бюстгальтеры
                </a>
              </li>
              <li className={style.categorySubitem}>
                <a className={style.link} href="#">
                  Трусы
                </a>
              </li>
              <li className={style.categorySubitem}>
                <a className={style.link} href="#">
                  Носки
                </a>
              </li>
              <li className={style.categorySubitem}>
                <a className={style.link} href="#">
                  Халаты
                </a>
              </li>
              <li className={style.categorySubitem}>
                <a className={style.link} href="#">
                  Термобелье
                </a>
              </li>
              <li className={style.categorySubitem}>
                <a className={style.link} href="#">
                  Пижамы
                </a>
              </li>
            </ul>
          </li>
          <li className={style.categoryListItem}>
            <h3 className={style.categorySubtitle}>Мужчины</h3>
            <ul className={style.categorySublist}>
              <li className={style.categorySubitem}>
                <a className={style.link} href="#">
                  Трусы
                </a>
              </li>
              <li className={style.categorySubitem}>
                <a className={style.link} href="#">
                  Носки
                </a>
              </li>
              <li className={style.categorySubitem}>
                <a className={style.link} href="#">
                  Халаты
                </a>
              </li>
              <li className={style.categorySubitem}>
                <a className={style.link} href="#">
                  Термобелье
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className={style.social}>
        <h2 className={style.socialTitle}>Связаться с нами</h2>
        <p className={style.socialSubtitle}>Контакты и адреса магазинов</p>
        <div className={style.socialList}>
          <a href="#" className={style.socialLinkVK}>
            <VkSvg />
          </a>
          <a href="#" className={style.socialLinkFB}>
            <FacebookSvg />
          </a>
        </div>
      </div>
      <div className={style.contacts}>
        <a href="mailto:Inspired@gmail.com">Inspired@gmail.com</a>
        <a href="tel:89304902620">8 930 490 26 20</a>
      </div>
      <div className={style.copyright}>&copy; INSPIRED, 2023</div>
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
    </Container>
  </footer>
);
