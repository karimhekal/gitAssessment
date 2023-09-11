import React, {useEffect, useState} from 'react';
import {
  Button,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {fetchFilteredRepos} from '../store/reducers/dataSlice';
import {useSelector} from 'react-redux';
import {RootState, useAppDispatch} from '../store/store';
import {
  GitHubRepository,
  IViewCountArr,
  Ifilter,
} from '../interfaces/interfaces';
import {Theme} from '../Config';
import {Text} from './Text';
import LoadingPlaceHolder from './LoadingPlaceHolder';
import FilterRepoCard from './FilterRepoCard';
import DatePicker from 'react-native-date-picker';

import Modal from 'react-native-modal';
import SelectLanguage from './SelectLanguage';
import moment from 'moment';
import Icon from 'react-native-vector-icons/FontAwesome';

const languageArr: IViewCountArr[] = [
  {
    label: 'C',
    value: 'C',
  },
  {
    label: 'C++',
    value: 'C++',
  },
  {
    label: 'Java',
    value: 'Java',
  },
  {
    label: 'Javascript',
    value: 'Javascript',
  },
  {
    label: 'Typescript',
    value: 'Typescript',
  },
  {
    label: 'Kotlin',
    value: 'Kotlin',
  },
  {
    label: 'Python',
    value: 'Python',
  },
  {
    label: 'Go',
    value: 'Go',
  },
  {
    label: 'Ruby',
    value: 'Ruby',
  },
  {
    label: 'Dart',
    value: 'Dart',
  },
];

export default function FilteredTab({index}) {
  const dispatch = useAppDispatch();
  const repos = useSelector((state: RootState) => state.data.filteredRepos);
  const [languageValue, setLanguageValue] = useState(languageArr[0].value);
  const [langModalVisible, setLangModalVisisble] = useState<boolean>(false);
  const [dateValue, setDateValue] = useState(new Date());
  const loading = useSelector((state: RootState) => state.data.loading);
  const [dateModalOpen, setDateModalOpen] = useState<boolean>(false);

  function getRepos({language, date, count}: Ifilter) {
    dispatch(fetchFilteredRepos({language, date, count}));
  }
  useEffect(() => {
    getRepos({
      language: languageValue,
      date: moment(dateValue).format('YYYY-MM-DD'),
      count: '10',
    });
  }, [dispatch, index, languageValue, dateValue]);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Repositories</Text>
      <DatePicker
        mode="date"
        modal
        open={dateModalOpen}
        date={dateValue}
        onConfirm={date => {
          setDateModalOpen(false);
          setDateValue(date);
        }}
        onCancel={() => {
          setDateModalOpen(false);
        }}
      />
      <Modal
        backdropOpacity={0.31}
        onBackdropPress={() => setLangModalVisisble(false)}
        isVisible={langModalVisible}>
        <SelectLanguage
          setModalVisible={setLangModalVisisble}
          languages={languageArr}
          setLanguageValue={setLanguageValue}
        />
      </Modal>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => setLangModalVisisble(true)}
          style={styles.langFilter}>
          <View style={styles.horizontal}>
            <Text style={styles.filterTitle} type="captionMedium">
              Language :{' '}
            </Text>
            <Text type="captionMedium">{languageValue}</Text>
          </View>
          <Icon name="angle-down" size={14} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setDateModalOpen(true);
          }}
          style={styles.langFilter}>
          <View style={styles.horizontal}>
            <Text style={styles.filterTitle} type="captionMedium">
              Date :{' '}
            </Text>
            <Text type="captionMedium">
              {moment(dateValue).format('D MMM YY')}
            </Text>
          </View>
          <Icon name="angle-down" size={14} />
        </TouchableOpacity>
      </View>

      {!loading ? (
        <FlatList<GitHubRepository>
          refreshing={loading}
          onRefresh={() =>
            getRepos({
              count: '10',
              date: moment(dateValue).format('YYYY-MM-DD'),
              language: languageValue,
            })
          }
          showsVerticalScrollIndicator={false}
          data={repos}
          renderItem={({item, index}) => {
            return <FilterRepoCard index={index} repo={item} />;
          }}
        />
      ) : (
        <LoadingPlaceHolder>
          <View style={styles.loadingCard} />
          <View style={styles.loadingCard} />
          <View style={styles.loadingCard} />
        </LoadingPlaceHolder>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Theme.spacing.m,
    alignItems: 'center',
    width: '100%',
    paddingBottom: Theme.spacing.m,
  },
  filterTitle: {
    color: Theme.colors.secondary,
  },
  horizontal: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    marginTop: Theme.spacing.l,
    fontSize: 20,
    fontFamily: Theme.fonts.EnglishRegular,
  },
  container: {
    width: '100%',
    paddingHorizontal: Theme.spacing.l,
    flexDirection: 'column',
    backgroundColor: Theme.colors.tabBackground,
    height: '100%',
  },
  loadingCard: {
    backgroundColor: 'rgba(100,100,100,0.45)',
    width: '100%',
    height: 160,
    borderRadius: Theme.spacing.s,
    marginTop: Theme.spacing.m,
  },
  containerStyle: {
    width: '50%',
    borderWidth: 0,
  },
  langFilter: {
    display: 'flex',
    backgroundColor: Theme.colors.background,
    padding: Theme.spacing.m,
    flex: 0.48,
    shadowColor: 'rgba(100,100,100,0.2)',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    elevation: 1,
    shadowOpacity: 0.3,
    shadowRadius: 2,
    borderRadius: Theme.spacing.s,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateFilter: {
    display: 'flex',
    backgroundColor: Theme.colors.background,
    padding: Theme.spacing.m,
    flex: 0.48,
    shadowColor: 'rgba(100,100,100,0.2)',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    elevation: 1,
    shadowOpacity: 0.3,
    shadowRadius: 2,
    borderRadius: Theme.spacing.s,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  dropDownContainerStyle: {
    borderWidth: 0,
  },
  dropDownStyle: {
    marginTop: Theme.spacing.m,
    borderWidth: 0,
    shadowColor: 'rgba(100,100,100,0.4)',
    elevation: 10,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 1,
    shadowRadius: 1,
    padding: 10,
  },
});
