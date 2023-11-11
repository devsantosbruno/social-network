import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import Home from './src/screens/Home';

export default function App() {
  return (
    <>
      <StatusBar style='light' backgroundColor='transparent' translucent />
      <Home />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242424',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
