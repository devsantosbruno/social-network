import { COLORS } from '@themes';
import { ActivityIndicator, View } from 'react-native';
import { styles } from './styles';

export function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={COLORS.NEUTRAL.WHITE} />
    </View>
  );
}
