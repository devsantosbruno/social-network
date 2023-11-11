import { useNavigation } from '@react-navigation/native';
import {
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  View,
} from 'react-native';

import { Typography } from '@components/Typography';

import backgroundImg from '@assets/background-01.jpg';
import { styles } from './styles';

export default function Login() {
  const navigation = useNavigation();

  const handleStart = () => {
    navigation.navigate('home');
  };

  return (
    <ImageBackground source={backgroundImg} style={{ flex: 1 }}>
      <SafeAreaView
        style={{
          flex: 1,
        }}
      >
        <View style={styles.container}>
          <View style={styles.content}>
            <Typography variant='heading' style={styles.title}>
              Welcome!
            </Typography>

            <TouchableOpacity style={styles.button} onPress={handleStart}>
              <Typography style={styles.buttonText}>START</Typography>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}
