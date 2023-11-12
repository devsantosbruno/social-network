import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '@screens/Home';
import Login from '@screens/Login';
import Profile from '@screens/Profile';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator initialRouteName='login'>
      <Screen name='login' component={Login} options={{ headerShown: false }} />
      <Screen name='home' component={Home} options={{ headerShown: false }} />
      <Screen
        name='profile'
        component={Profile}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
}
