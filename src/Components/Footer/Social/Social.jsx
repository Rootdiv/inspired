import style from './Social.module.scss';
import { ReactComponent as VkSvg } from '@/assets/vk.svg';
import { ReactComponent as FacebookSvg } from '@/assets/facebook.svg';
import cn from 'classnames';

export const Social = () => (
  <div className={style.social}>
    <h2 className={cn(style.title, style.socialTitle)}>Связаться с нами</h2>
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
);
