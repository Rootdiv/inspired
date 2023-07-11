import { Color } from '@/Components/ColorList/Color/Color';
import style from './ColorList.module.scss';
import { useSelector } from 'react-redux';
import { ColorLabel } from '@/Components/ColorList/ColorLabel/ColorLabel';

export const ColorList = ({ colors, selectedColor, handleColorChange }) => {
  const { colorList } = useSelector(state => state.colors);

  return handleColorChange ? (
    <div className={style.colorList}>
      {colors?.map((id, idx) => {
        const color = colorList.find(color => color.id === id);
        return (
          <ColorLabel
            key={id}
            color={color}
            check={!idx}
            selectedColor={selectedColor}
            handleColorChange={handleColorChange}
          />
        );
      })}
    </div>
  ) : (
    <ul className={style.colorList}>
      {colors.map((id, idx) => {
        const color = colorList.find(color => color.id === id);
        return <Color key={id} color={color?.code} check={!idx} />;
      })}
    </ul>
  );
};
