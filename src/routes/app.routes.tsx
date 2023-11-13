import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '@screens/Home';
import Profile from '@screens/Profile';
import Welcome from '@screens/Welcome';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      initialRouteName='welcome'
      screenOptions={{ headerShown: false }}
    >
      <Screen name='welcome' component={Welcome} />
      <Screen name='home' component={Home} />
      <Screen name='profile' component={Profile} />
    </Navigator>
  );
}
