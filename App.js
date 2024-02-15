// import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View ,StatusBar,LogBox} from 'react-native';
import HeaderComponent from './src/component/HeaderComponent';
import ProductListingScreen from './src/screen/ProductListingScreen';
console.disableYellowBox = true;
let statusbar = StatusBar.currentHeight
LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ProductListingScreen/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:statusbar
  },
});


