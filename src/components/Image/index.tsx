import { useNavigation } from '@react-navigation/native';
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

  const navigation = useNavigation();

  const handleOnPress = () => {
    navigation.navigate('profile');
  };

  return (
    <TouchableOpacity
      style={[styles.container, customStyles]}
      onPress={handleOnPress}
    >
      <ImageRN
        source={source}
        width={size}
        height={size}
        style={styles.image}
      />
    </TouchableOpacity>
  );
}
