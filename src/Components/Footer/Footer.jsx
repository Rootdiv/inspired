import { Container } from '@/Components/Layout/Container/Container';
import { Category } from '@/Components/Footer/Category/Category';
import { Social } from '@/Components/Footer/Social/Social';
import { Development } from '@/Components/Footer/Development/Development';
import { Contacts } from '@/Components/Footer/Contacts/Contacts';

import style from './Footer.module.scss';

export const Footer = () => (
  <footer className={style.footer}>
    <Container>
      <div className={style.container}>
        <Category />
        <Social />
        <Contacts />
        <div className={style.copyright}>
          <p>&copy; INSPIRED, 2023</p>
        </div>
        <Development />
      </div>
    </Container>
  </footer>
);
