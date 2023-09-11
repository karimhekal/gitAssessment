import React, {useCallback, useEffect, useState} from 'react';
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import {RootState, useAppDispatch} from '../store/store';
import {useSelector} from 'react-redux';
import {
  fetchFilteredRepos,
  fetchPopularRepos,
} from '../store/reducers/dataSlice';
import {
  SceneMap,
  SceneRendererProps,
  TabBar,
  TabView,
} from 'react-native-tab-view';
import ExploreTab from './ExploreTab';
import FilteredTab from './FilteredTab';
import {Theme} from '../Config';
import {Box} from './Box';
export default function List() {
  const [index, setIndex] = useState<number>(0);

  const layout = useWindowDimensions();
  const [routes, setRoutes] = React.useState([
    {key: 'first', title: 'Explore'},
    {key: 'second', title: 'Repositories'},
  ]);

  const Explore = useCallback(() => {
    return <ExploreTab index={index} />;
  }, [index]);
  const Filtered = useCallback(() => {
    return <FilteredTab index={index} />;
  }, [index]);
  const renderScene = SceneMap({
    first: Explore,
    second: Filtered,
  });

  const renderTabBar = (props: SceneRendererProps) => {
    return (
      <TabBar
        onTabPress={scene => {
          console.log(scene);
        }}
        scrollEnabled={true}
        {...props}
        activeColor={Theme.colors.primary}
        inactiveColor={Theme.colors.secondary}
        indicatorStyle={styles.tabBarIndicatorStyle}
        style={styles.tabBarStyle}
        tabStyle={styles.tabBarTabStyle}
        labelStyle={styles.tabBarLabelStyle}
      />
    );
  };
  return (
    <Box>
      <TabView
        swipeEnabled={true}
        lazy
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: Dimensions.get('screen').width}}
        renderTabBar={renderTabBar}
      />
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.background,
  },

  tabBarStyle: {
    backgroundColor: Theme.colors.background,
  },
  tabBarIndicatorStyle: {
    backgroundColor: Theme.colors.primary,
  },
  tabBarLabelStyle: {
    textTransform: 'capitalize',
    lineHeight: 18,
    fontSize: 14,
  },
  tabBarTabStyle: {
    height: 60,
  },
});
