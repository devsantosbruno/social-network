import { TouchableOpacity } from 'react-native';

import { Typography } from '@components';

import { styles } from './styles';

type InteractionProps = {
  quantity: number;
  icon: any;
};

export function Interaction({ quantity, icon }: InteractionProps) {
  return (
    <TouchableOpacity style={styles.container}>
      {icon}
      <Typography variant='bodyBold' style={styles.quantity}>
        {quantity}
      </Typography>
    </TouchableOpacity>
  );
}
