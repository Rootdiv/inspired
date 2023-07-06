import { Container } from '@/Components/Layout/Container/Container';
import { Category } from '@/Components/Footer/Category/Category';
import { Social } from '@/Components/Footer/Social/Social';
import { Contacts } from '@/Components/Footer/Contacts/Contacts';
import { Copyright } from '@/Components/Footer/Copyright/Copyright';
import { Development } from '@/Components/Footer/Development/Development';

import style from './Footer.module.scss';

export const Footer = () => (
  <footer className={style.footer}>
    <Container>
      <div className={style.container}>
        <Category />
        <Social />
        <Contacts />
        <Copyright />
        <Development />
      </div>
    </Container>
  </footer>
);
