import { useNavigation } from '@react-navigation/native';
import {
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  View,
} from 'react-native';

import { Typography } from '@components';

import backgroundImg from '@assets/background-01.png';
import { styles } from './styles';

export default function Welcome() {
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
            <Typography variant='heading' style={styles.textWhite}>
              Welcome!
            </Typography>

            <TouchableOpacity style={styles.button} onPress={handleStart}>
              <Typography variant='heading02Thin' style={styles.textWhite}>
                START
              </Typography>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}
