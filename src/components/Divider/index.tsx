import { METRICS } from '@themes';
import { View } from 'react-native';
import { styles } from './styles';

export function Divider({ spacing = METRICS.SPACING.LG }: any) {
  return <View style={[styles.divider, { marginVertical: spacing }]} />;
}
