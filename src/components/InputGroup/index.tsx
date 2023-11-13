import { COLORS, METRICS } from '@themes';
import { useState } from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

type InputGroupProps = {
  placeholder: string;
  icon?: any;
};

export function InputGroup({ placeholder, icon }: InputGroupProps) {
  const [inputValue, setInputValue] = useState<string>();

  const handleSubmit = () => {
    if (inputValue?.length) {
      console.log('SUBMIT SEARCH');
    }
  };

  const styleWithIcon = {
    paddingLeft: icon ? METRICS.SPACING.XXL : METRICS.SPACING.XS,
    zIndex: -2,
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
        onChangeText={setInputValue}
        value={inputValue}
        placeholderTextColor={COLORS.NEUTRAL.BLACK30}
        placeholder={placeholder}
      />
    </View>
  );
}
