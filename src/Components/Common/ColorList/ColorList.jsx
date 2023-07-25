import { Color } from '@/Components/Common/ColorList/Color/Color';
import style from './ColorList.module.scss';
import { useSelector } from 'react-redux';
import { ColorLabel } from '@/Components/Common/ColorList/ColorLabel/ColorLabel';

export const ColorList = ({ colors, validate }) => {
  const { colorList } = useSelector(state => state.colors);

  return validate ? (
    <div className={style.colorList}>
      {colors?.map(id => {
        const color = colorList.find(color => color.id === id);
        return <ColorLabel key={id} color={color} />;
      })}
    </div>
  ) : (
    <ul className={style.colorList}>
      {colors.map((id, idx) => {
        const colorCode = colorList.find(color => color.id === id)?.code;
        return <Color key={id} color={colorCode} check={!idx} />;
      })}
    </ul>
  );
};
