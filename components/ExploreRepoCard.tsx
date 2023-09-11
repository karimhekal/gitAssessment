import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Theme} from '../Config';
import {Text} from './Text';
import {GitHubRepository} from '../interfaces/interfaces';
import Icon from 'react-native-vector-icons/AntDesign';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {abbrevNumber} from '../utils/Utils';
import moment from 'moment';
function RepoCard({repo, index}: {repo: GitHubRepository; index: number}) {
  return (
    <View
      style={[
        styles.card,
        {
          marginTop: index == 0 ? 0 : Theme.spacing.m,
        },
      ]}>
      <View style={styles.top}>
        <View style={styles.topStart}>
          <Text type="smallTitle">Trending repositoy</Text>
        </View>
        <View style={styles.topEnd}>
          <AwesomeIcon name="star-o" size={12} color={Theme.colors.primary} />
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
        <Text numberOfLines={3} style={styles.description} type="subheadMedium">
          {repo.description}
        </Text>
      </View>
      <View style={styles.line} />
      <View style={styles.bottomSection}>
        <View style={styles.bottomInner}>
          <Text style={{fontSize: 12}} type="captionMedium">
            Updated {moment(repo.updated_at).fromNow()}
          </Text>
        </View>
        <View style={styles.bottomInner}>
          <Text style={{fontSize: 12}} type="captionMedium">
            {repo.language}
          </Text>
        </View>
      </View>
    </View>
  );
}
export default React.memo(RepoCard);
const styles = StyleSheet.create({
  bottomSection: {
    flexDirection: 'row',
    marginTop: Theme.spacing.m,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    gap: Theme.spacing.l,
  },
  bottomInner: {
    flex: 0.5,
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
    backgroundColor: Theme.colors.card,
    justifyContent: 'flex-start',
    elevation: 3,
    borderRadius: Theme.spacing.s,
    alignItems: 'flex-start',
    width: '100%',
  },
  repoStarsText: {
    fontSize: 12,
    color: Theme.colors.primary,
  },
  starWord: {
    marginStart: Theme.spacing.xs,
    fontSize: 12,
  },
  repoName: {
    marginStart: Theme.spacing.s,
    color: Theme.colors.primary,
    fontSize: 18,
  },
  starsBadgeContainer: {
    paddingHorizontal: 10,
    paddingVertical: 2,
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
    fontSize: 12,
  },
  top: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    flexDirection: 'row',
  },
  topStart: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  topEnd: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
