import {Component} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import GuessingGame from './screens/GuessingGame';

class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <GuessingGame />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
