
import { StyleSheet, Text, View } from 'react-native';
import Milene from './Milene';

export default function App() {
  return (
    <View>
      <Milene/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
