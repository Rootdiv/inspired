import { Container } from '@/Components/Layout/Container/Container';
import style from './Search.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { searchQuery } from '@/features/searchSlice';
import { useNavigate } from 'react-router-dom';

export const Search = () => {
  const { openSearch } = useSelector(state => state.search);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmitOrder = values => {
    dispatch(searchQuery(values));
    navigate(`/search?q=${values.search}`);
  };

  const validationSchema = Yup.object({
    search: Yup.string().required('Заполните поле поиска'),
  });

  return (
    openSearch && (
      <div className={style.search}>
        <Container>
          <Formik
            initialValues={{
              search: '',
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmitOrder}>
            <Form className={style.form}>
              <Field type="search" name="search" placeholder="Найти..." className={style.input} />
              <ErrorMessage className={style.error} name="search" component={'span'} />
              <button type="submit" className={style.btn}>
                Искать
              </button>
            </Form>
          </Formik>
        </Container>
      </div>
    )
  );
};
