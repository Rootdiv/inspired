import { Circles, ThreeCircles } from 'react-loader-spinner';

const style = {
  display: 'flex',
  justifyContent: 'center',
  padding: '100px 0',
};

const styleProduct = {
  display: 'flex',
  padding: '50px',
};

export const Preloader = () => (
  <div style={style}>
    <Circles width={170} height={240} color="#4fa94d" ariaLabel="circles-loading" />
  </div>
);

export const ProductPreloader = () => (
  <div style={styleProduct}>
    <ThreeCircles
      width={170}
      height={240}
      color="#4fa94d"
      ariaLabel="three-circles-rotating"
      wrapperStyle={{ justifyContent: 'center' }}
    />
  </div>
);
