/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';

import {Provider} from 'react-redux';
import {store} from './store/store';
import List from './components/List';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.safeArea}>
        <List />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  safeArea: {flex: 1, backgroundColor: 'white'},
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
