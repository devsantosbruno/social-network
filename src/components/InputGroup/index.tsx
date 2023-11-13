import { COLORS, METRICS } from '@themes';
import { TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

type InputGroupProps = {
  placeholder: string;
  icon?: any;
};

export function InputGroup({ placeholder, icon }: InputGroupProps) {
  const handleSubmit = () => {
    console.log('SUBMIT SEARCH');
  };

  const styleWithIcon = {
    paddingLeft: icon ? METRICS.SPACING.XXL : METRICS.SPACING.XS,
  };

  return (
    <View style={styles.container}>
      {icon && (
        <View style={styles.searchBox}>
          <TouchableOpacity style={styles.search} onPress={handleSubmit}>
            {icon}
          </TouchableOpacity>
        </View>
      )}

      <TextInput
        style={[styles.input, styleWithIcon]}
        placeholderTextColor={COLORS.NEUTRAL.BLACK30}
        placeholder={placeholder}
      />
    </View>
  );
}
