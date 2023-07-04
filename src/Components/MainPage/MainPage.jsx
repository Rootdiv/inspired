import { Container } from '@/Components/Layout/Container/Container';
import { useParams } from 'react-router-dom';

export const MainPage = ({ gender = 'women' }) => {
  const { category } = useParams();
  return (
    <Container>
      <div>MainPage {gender} </div>
      {category && <p>Категория {category}</p>}
    </Container>
  );
};
