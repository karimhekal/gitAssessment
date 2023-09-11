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
import Icon from 'react-native-vector-icons/Fontisto';
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
        <Text style={styles.select}>Select Language</Text>
        <TouchableOpacity
          style={styles.x}
          onPress={() => {
            setModalVisible(false);
          }}>
          <Icon name="close-a" size={9} color={Theme.colors.background} />
        </TouchableOpacity>
      </View>
      <FormField
        placeholder="Filter Languages"
        onChangeText={filterLanguages}
        searchButton
        style={styles.input}
      />
      <ScrollView contentContainerStyle={styles.scroll}>
        <FlatList
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => {
            return (
              <View>
                <TouchableOpacity
                  onPress={() => handleValue(item.value)}
                  style={{
                    marginTop: Theme.spacing.m,
                    padding: Theme.spacing.s,
                  }}>
                  <Text style={{fontSize: 14}}>{item.value}</Text>
                </TouchableOpacity>
                <View style={styles.line} />
              </View>
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
  select: {fontSize: 14},
  line: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#bbb',
    width: '100%',
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
    fontSize: 8,
    lineHeight: 10,
    color: Theme.colors.background,
    fontFamily: Theme.fonts.EnglishBold,
  },
  x: {
    backgroundColor: 'rgba(204, 212, 221, 1)',
    borderRadius: 10000,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // width: 25,
    // height: 25,
    width: 25,
    aspectRatio: 1,
    padding: Theme.spacing.s,
  },
});
