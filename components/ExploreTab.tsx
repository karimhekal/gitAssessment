import React, {useEffect} from 'react';
import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import {fetchPopularRepos} from '../store/reducers/dataSlice';
import {useSelector} from 'react-redux';
import {RootState, useAppDispatch} from '../store/store';
import GitHubRepository from '../interfaces/interfaces';
import {Theme} from '../Config';
import {Text} from './Text';
import LoadingPlaceHolder from './LoadingPlaceHolder';
import RepoCard from './RepoCard';
export default function ExploreTab() {
  const dispatch = useAppDispatch();
  const repos = useSelector((state: RootState) => state.data.repos);
  // const filteredRepos = useSelector(
  //   (state: RootState) => state.data.filteredRepos,
  // );
  useEffect(() => {
    dispatch(fetchPopularRepos(4));
  }, [dispatch]);
  const loading = useSelector((state: RootState) => state.data.loading);
  const error = useSelector((state: RootState) => state.data.error);

  return (
    <View style={styles.container}>
      {!loading ? (
        <FlatList<GitHubRepository>
          data={repos}
          renderItem={({item}) => {
            return <RepoCard repo={item} />;
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
  container: {
    width: '100%',
    padding: 10,
    flexDirection: 'column',
    backgroundColor: Theme.colors.tabBackground,
  },
  loadingCard: {
    backgroundColor: 'rgba(100,100,100,0.45)',
    width: '100%',
    height: 160,
    borderRadius: Theme.spacing.m,
    marginTop: Theme.spacing.m,
  },
});
