import { useRouteError, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import style from './ErrorPage.module.scss';
import { useEffect, useRef } from 'react';
import { fetchColors } from '@/features/colorsSlice';
import { fetchNavigation } from '@/features/navigationSlice';

export const ErrorPage = () => {
  const routeError = useRouteError();
  const { status } = useSelector(state => state.statusServer);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const timerIdRef = useRef(null);

  useEffect(() => {
    if (status && location.pathname === '/404') {
      navigate('/');
    }
  }, [status, location.pathname, navigate]);

  useEffect(() => {
    if (!status && location.pathname === '/404') {
      clearInterval(timerIdRef.current);

      timerIdRef.current = setInterval(() => {
        dispatch(fetchColors());
        dispatch(fetchNavigation());
      }, 3000);
    }

    return () => {
      clearInterval(timerIdRef.current);
    };
  }, [status, location.pathname, dispatch]);

  return (
    <div className={style.error}>
      <h2 className={style.title}>Произошла ошибка попробуйте зайти позже</h2>
      <p className={style.message}>{routeError?.message || 'Неизвестная ошибка'}</p>
    </div>
  );
};
