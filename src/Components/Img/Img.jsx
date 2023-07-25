import { useState } from 'react';
import { ProductPreloader } from '@/Components/Preloader/Preloader';

export const Img = ({ className, src, alt }) => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <img
        src={src}
        alt={alt}
        className={className}
        style={{ display: loading ? 'none' : 'block' }}
        onLoad={() => setLoading(false)}
      />
      {loading && <ProductPreloader />}
    </>
  );
};
