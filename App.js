


import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Index from './client/components/Index';
import { Provider } from 'react-redux'; // Ensure Provider is imported from 'react-redux'
import store from './client/store';

export default function App() {

  return (
    <Provider store={store} >
      <View style={styles.container}  >
        {/* <StatusBar style="auto" /> */}
        <Index />
      </View >
      </Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
    // width: "100%"
  },
});

