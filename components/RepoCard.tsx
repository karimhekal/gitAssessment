import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Theme} from '../Config';
import {Text} from './Text';
import GitHubRepository from '../interfaces/interfaces';

export default function RepoCard({repo}: {repo: GitHubRepository}) {
  return (
    <View style={styles.card}>
      <View style={styles.top}>
        <View style={styles.topStart}>
          <Text type="smallTitle">Trending repositoy</Text>
        </View>
        <View style={styles.topEnd}></View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    padding: Theme.spacing.m,
    display: 'flex',
    backgroundColor: Theme.colors.card,
    justifyContent: 'flex-start',
    borderRadius: Theme.spacing.m,
    alignItems: 'center',
    width: '100%',
  },
  top: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  },
  topStart: {
    width: '70%',
  },
  topEnd: {
    width: '30%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
