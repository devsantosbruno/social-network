import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '@screens/Home';
import Profile from '@screens/Profile';
import Welcome from '@screens/Welcome';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator initialRouteName='welcome'>
      <Screen
        name='welcome'
        component={Welcome}
        options={{ headerShown: false }}
      />
      <Screen name='home' component={Home} options={{ headerShown: false }} />
      <Screen
        name='profile'
        component={Profile}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
}
