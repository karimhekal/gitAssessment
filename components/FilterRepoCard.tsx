import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Theme} from '../Config';
import {Text} from './Text';
import {GitHubRepository} from '../interfaces/interfaces';
import Icon from 'react-native-vector-icons/AntDesign';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {abbrevNumber} from '../utils/Utils';
function FilterRepoCard({
  repo,
  index,
}: {
  repo: GitHubRepository;
  index: number;
}) {
  return (
    <View style={[styles.card, {marginTop: index == 0 ? 0 : Theme.spacing.m}]}>
      <View style={styles.top}></View>
      <View style={styles.titleContainer}>
        <Icon name="book" size={20} color={Theme.colors.primary} />
        <Text style={styles.repoName}>{repo.name}</Text>
      </View>
      <View>
        <Text numberOfLines={3} style={styles.description}>
          {repo.description}
        </Text>
      </View>
      <View style={styles.line} />
      <View style={styles.bottomSection}>
        <Text style={styles.textDetails}>{repo.language}</Text>
        <View style={styles.starsContainer}>
          <AwesomeIcon name="star-o" color={Theme.colors.primary} size={14} />
          <Text style={styles.textDetails}>
            {abbrevNumber(repo.stargazers_count)}
          </Text>
        </View>
        <View style={styles.starsContainer}>
          <Icon name="fork" color={Theme.colors.primary} size={14} />
          <Text style={styles.textDetails}>
            {abbrevNumber(repo.forks_count)}
          </Text>
        </View>
      </View>
    </View>
  );
}
export default React.memo(FilterRepoCard);
const styles = StyleSheet.create({
  bottomSection: {
    flexDirection: 'row',
    marginTop: Theme.spacing.m,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
  },
  detailText: {marginStart: Theme.spacing.xs},
  starsContainer: {
    marginStart: Theme.spacing.m,
    display: 'flex',
    fontSize: 12,
    lineHeight: 14,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  line: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#bbb',
    width: '100%',
    marginTop: Theme.spacing.m,
  },
  card: {
    paddingHorizontal: Theme.spacing.m,
    paddingVertical: Theme.spacing.m,
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
    fontSize: Theme.spacing.m,
    color: Theme.colors.primary,
  },
  starWord: {
    marginStart: Theme.spacing.s,
  },
  repoName: {
    marginStart: Theme.spacing.s,
    color: Theme.colors.primary,
    fontFamily: Theme.fonts.EnglishRegular,
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
    marginVertical: Theme.spacing.xs,
    display: 'flex',
    justifyContent: 'flex-start',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  description: {
    marginTop: Theme.spacing.s,
    fontSize: 12,
    lineHeight: 16,
  },
  textDetails: {
    fontSize: 12,
    lineHeight: 14,
    marginStart: Theme.spacing.xs,
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
