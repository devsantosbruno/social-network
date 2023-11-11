import { Loading } from '@components/Loading';
import {
  Roboto_100Thin,
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from '@expo-google-fonts/roboto';
import Home from '@screens/Home';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_100Thin,
    Roboto_400Regular,
    Roboto_700Bold,
  });

  return (
    <>
      <StatusBar style='light' backgroundColor='transparent' translucent />
      {fontsLoaded ? <Home /> : <Loading />}
    </>
  );
}
