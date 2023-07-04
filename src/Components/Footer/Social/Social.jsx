import style from './Social.module.scss';
import { ReactComponent as VkSvg } from '@/assets/vk.svg';
import { ReactComponent as FacebookSvg } from '@/assets/facebook.svg';
import cn from 'classnames';

export const Social = () => (
  <div className={style.social}>
    <h2 className={cn(style.title, style.socialTitle)}>Связаться с нами</h2>
    <p className={style.socialSubtitle}>Контакты и адреса магазинов</p>
    <div className={style.socialList}>
      <ul className={style.socialList}>
        <li>
          <a href="#" className={cn(style.link, style.socialLinkVK)}>
            <VkSvg />
          </a>
        </li>
        <li>
          <a href="#" className={cn(style.link, style.socialLinkFB)}>
            <FacebookSvg />
          </a>
        </li>
      </ul>
    </div>
  </div>
);
