import { Image as ImageRN, TouchableOpacity } from 'react-native';
import { styles } from './styles';

type ImageProps = {
  source: ImageData;
  size: number;
  borderSize: number;
};

export function Image({ source, size, borderSize }: ImageProps) {
  const customStyles = { width: size, height: size, borderWidth: borderSize };

  return (
    <TouchableOpacity style={[styles.container, customStyles]}>
      <ImageRN
        source={source}
        width={size}
        height={size}
        style={styles.image}
      />
    </TouchableOpacity>
  );
}
