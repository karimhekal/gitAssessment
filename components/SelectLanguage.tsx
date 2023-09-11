import React, {useState} from 'react';
import {
  Dimensions,
  FlatList,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {Text} from './Text';
import {Theme} from '../Config';
import {FormField} from './FormField';
export default function SelectLanguage({
  setModalVisible,
  languages,
  setLanguageValue,
}) {
  const [filteredLanguages, setFilteredLanguages] =
    useState<string[]>(languages);

  function filterLanguages(lang: string) {
    console.log(lang);
    const temp = languages.filter((item: {value: string; label: string}) => {
      return (
        item.value.toLowerCase() == lang.toLowerCase() ||
        item.value.toLowerCase().includes(lang.toLowerCase())
      );
    });

    setFilteredLanguages(temp);
    console.log(temp, lang);
  }

  function handleValue(value) {
    setLanguageValue(value);
    setModalVisible(false);
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Select Language</Text>
        <TouchableOpacity
          style={styles.x}
          onPress={() => {
            setModalVisible(false);
          }}>
          <Text style={styles.xText}>X</Text>
        </TouchableOpacity>
      </View>
      <FormField
        onChangeText={filterLanguages}
        clearButton
        style={styles.input}
      />
      <ScrollView contentContainerStyle={styles.scroll}>
        <FlatList
          showsVerticalScrollIndicator
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() => handleValue(item.value)}
                style={{marginTop: Theme.spacing.s, padding: Theme.spacing.s}}>
                <Text>{item.value}</Text>
                <View style={styles.line} />
              </TouchableOpacity>
            );
          }}
          data={filteredLanguages}
        />
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  scroll: {width: '100%', height: Dimensions.get('screen').height / 2},
  container: {
    backgroundColor: 'white',
    padding: Theme.spacing.m,
    borderRadius: Theme.spacing.s,
    width: '100%',
  },
  line: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#bbb',
    marginTop: Theme.spacing.m,
  },
  input: {
    marginTop: Theme.spacing.m,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  xText: {
    fontSize: 12,
    lineHeight: 16,
    color: Theme.colors.background,
    fontFamily: Theme.fonts.EnglishBold,
  },
  x: {
    backgroundColor: 'rgba(204, 212, 221, 1)',
    borderRadius: 10000,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    height: 30,
    padding: Theme.spacing.s,
  },
});
