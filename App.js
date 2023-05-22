import { StatusBar } from 'expo-status-bar';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <>
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Text>Search</Text>
      </View>
      <View style={styles.list}>
        <Text>List</Text>
      </View>
    </SafeAreaView>
    <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight
  },
  search: {
    backgroundColor: 'green',
    padding: 20
  },
  list: {
    backgroundColor: 'blue',
    flex: 1,
    padding: 20,
  }
});
