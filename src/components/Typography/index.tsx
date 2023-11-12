import { Text, TextProps } from 'react-native';
import { TYPOGRAPHY_VARIANT_STYLES } from './styles';

export interface TypographyProps extends TextProps {
  variant?: keyof typeof TYPOGRAPHY_VARIANT_STYLES;
}

export function Typography({
  children,
  style,
  variant = 'bodyRegular',
}: TypographyProps) {
  return (
    <Text style={[TYPOGRAPHY_VARIANT_STYLES[variant], style]}>{children}</Text>
  );
}
