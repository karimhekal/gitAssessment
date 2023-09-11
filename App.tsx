/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import {LogBox, View} from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications
import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';

import {Provider} from 'react-redux';
import {persistor, store} from './store/store';
import List from './components/List';
import {PersistGate} from 'redux-persist/integration/react';
import Icon from 'react-native-vector-icons/AntDesign';
import {Theme} from './Config';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.searchContainer}>
            <Icon name="search1" size={22} />
          </View>
          <List />
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  safeArea: {flex: 1, backgroundColor: 'white'},
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  searchContainer: {
    paddingHorizontal: Theme.spacing.l,
    paddingVertical: Theme.spacing.m,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
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
