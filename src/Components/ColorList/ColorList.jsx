import { Color } from '@/Components/ColorList/Color/Color';
import style from './ColorList.module.scss';
import { useSelector } from 'react-redux';

export const ColorList = ({ colors }) => {
  const { colorList } = useSelector(state => state.colors);

  return (
    <ul className={style.colorList}>
      {colors.map((id, idx) => {
        const color = colorList.find(color => color.id === id);
        return <Color key={id} color={color?.code} check={!idx} />;
      })}
    </ul>
  );
};
