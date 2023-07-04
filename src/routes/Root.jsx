import { Footer } from '@/Components/Footer/Footer';
import { Header } from '@/Components/Header/Header';
import { Main } from '@/Components/Layout/Main/Main';
import { Outlet } from 'react-router-dom';

export const Root = () => (
  <>
    <Header />
    <Main>
      <Outlet />
    </Main>
    <Footer />
  </>
);
