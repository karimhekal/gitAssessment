import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import {fetchPopularRepos} from '../store/reducers/dataSlice';
import {useSelector} from 'react-redux';
import {RootState, useAppDispatch} from '../store/store';
import {GitHubRepository, IViewCountArr} from '../interfaces/interfaces';
import {Theme} from '../Config';
import LoadingPlaceHolder from './LoadingPlaceHolder';
import RepoCard from './ExploreRepoCard';
import DropDownPicker from 'react-native-dropdown-picker';
import {Text} from './Text';

const viewCountArr: IViewCountArr[] = [
  {
    label: '5',
    value: '5',
  },
  {
    label: '10',
    value: '10',
  },
  {
    label: '15',
    value: '15',
  },
  {
    label: '20',
    value: '20',
  },
  {
    label: '25',
    value: '25',
  },
];
export default function ExploreTab({index}) {
  const dispatch = useAppDispatch();
  const repos = useSelector((state: RootState) => state.data.repos);
  const [viewCount, setViewCount] = useState<string>(viewCountArr[0].value);
  function getRepos(count: string) {
    dispatch(fetchPopularRepos(count));
  }
  useEffect(() => {
    getRepos(viewCount);
  }, [dispatch, index]);
  const loading = useSelector((state: RootState) => state.data.loading);
  const error = useSelector((state: RootState) => state.data.error);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(viewCountArr[0].value);
  const [items, setItems] = useState(viewCountArr);
  return (
    <View style={styles.container}>
      <View style={styles.topSectionContainer}>
        <Text style={styles.title}>Explore Popular</Text>
        <DropDownPicker
          open={open}
          containerStyle={styles.containerStyle}
          dropDownContainerStyle={styles.dropDownContainerStyle}
          style={styles.dropDownStyle}
          value={'View' + viewCount}
          onSelectItem={item => {
            getRepos(item.value || '1');
            setViewCount(item.value || '1');
          }}
          items={items}
          arrowIconStyle={{
            marginHorizontal: 6,
          }}
          placeholder={`View : ${value}`}
          placeholderStyle={{
            color: Theme.colors.text,
            marginHorizontal: 6,
          }}
          searchPlaceholderTextColor="blue"
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          mode="BADGE"
        />
      </View>
      <FlatList<GitHubRepository>
        showsVerticalScrollIndicator={false}
        numColumns={1}
        contentContainerStyle={{}}
        ListEmptyComponent={() => {
          return (
            <LoadingPlaceHolder>
              <View style={styles.loadingCard} />
              <View style={styles.loadingCard} />
              <View style={styles.loadingCard} />
            </LoadingPlaceHolder>
          );
        }}
        refreshing={loading}
        onRefresh={() => getRepos(viewCount)}
        data={repos}
        renderItem={({item, index}) => {
          return <RepoCard index={index} repo={item} />;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: Theme.spacing.l,
    flexDirection: 'column',
    backgroundColor: Theme.colors.tabBackground,
    height: '100%',
  },
  title: {
    marginTop: Theme.spacing.l,
    fontSize: 20,
    fontFamily: Theme.fonts.EnglishRegular,
  },
  loadingCard: {
    backgroundColor: 'rgba(100,100,100,0.45)',
    width: '100%',
    height: 160,
    borderRadius: Theme.spacing.s,
    marginTop: Theme.spacing.m,
  },
  topSectionContainer: {
    paddingBottom: Theme.spacing.m,
    zIndex: 100,
  },
  containerStyle: {
    width: '45%',
    borderWidth: 0,
  },
  dropDownContainerStyle: {
    borderWidth: 0,
  },
  dropDownStyle: {
    marginTop: Theme.spacing.m,
    borderWidth: 0,
    shadowColor: 'rgba(100,100,100,0.35)',
    elevation: 2,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
});
