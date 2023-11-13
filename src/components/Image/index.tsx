import { METRICS } from '@themes';
import { Image as ImageRN, TouchableOpacity } from 'react-native';
import { styles } from './styles';

type ImageProps = {
  source: ImageData;
  size: number;
  borderSize?: number;
  circle?: boolean;
};

export function Image({ source, size, borderSize, circle }: ImageProps) {
  const radiusStyle = circle ? METRICS.RADIUS.PILL : METRICS.RADIUS.DEFAULT;
  const customStyles = {
    width: size,
    height: size,
    borderWidth: borderSize,
    borderRadius: radiusStyle,
  };

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
