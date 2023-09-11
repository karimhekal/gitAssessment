import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Theme} from '../Config';
import {Text} from './Text';
import GitHubRepository from '../interfaces/interfaces';
import Icon from 'react-native-vector-icons/AntDesign';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {abbrevNumber} from '../utils/Utils';
import moment from 'moment';
export default function RepoCard({repo}: {repo: GitHubRepository}) {
  return (
    <View style={styles.card}>
      <View style={styles.top}>
        <View style={styles.topStart}>
          <Text type="smallTitle">Trending repositoy</Text>
        </View>
        <View style={styles.topEnd}>
          <AwesomeIcon name="star-o" size={18} color={Theme.colors.primary} />
          <Text style={styles.starWord} type="headlineMedium">
            Star
          </Text>
          <View style={styles.starsBadgeContainer}>
            <Text style={styles.repoStarsText}>
              {abbrevNumber(repo.stargazers_count)}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.titleContainer}>
        <Icon name="book" size={20} color={Theme.colors.primary} />
        <Text style={styles.repoName}>{repo.name}</Text>
      </View>
      <View>
        <Text style={styles.description} type="body">
          {repo.description}
        </Text>
      </View>
      <View style={styles.line} />
      <View style={styles.bottomSection}>
        <Text type="body">Updated {moment(repo.updated_at).fromNow()}</Text>
        <Text type="body">{repo.language}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  bottomSection: {
    flexDirection: 'row',
    marginTop: Theme.spacing.m,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    gap: Theme.spacing.l,
  },
  line: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#bbb',
    width: '100%',
    marginTop: Theme.spacing.m,
  },
  card: {
    paddingHorizontal: Theme.spacing.m,
    paddingVertical: Theme.spacing.l,
    display: 'flex',
    shadowColor: Theme.colors.secondary,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    marginTop: Theme.spacing.l,
    backgroundColor: Theme.colors.card,
    justifyContent: 'flex-start',
    elevation: 3,
    borderRadius: Theme.spacing.s,
    alignItems: 'flex-start',
    width: '100%',
  },
  repoStarsText: {
    fontSize: Theme.spacing.m,
    color: Theme.colors.primary,
  },
  starWord: {
    marginStart: Theme.spacing.s,
  },
  repoName: {
    marginStart: Theme.spacing.s,
    color: Theme.colors.primary,
  },
  starsBadgeContainer: {
    paddingHorizontal: Theme.spacing.s,
    paddingVertical: Theme.spacing.xs,
    marginStart: Theme.spacing.s,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Theme.spacing.s,
    backgroundColor: Theme.colors.backgroundPrimary,
  },
  titleContainer: {
    marginTop: Theme.spacing.s,
    display: 'flex',
    justifyContent: 'flex-start',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  description: {
    marginTop: Theme.spacing.s,
  },
  top: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    flexDirection: 'row',
  },
  topStart: {
    display: 'flex',
    justifyContent: 'center',
  },
  topEnd: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
