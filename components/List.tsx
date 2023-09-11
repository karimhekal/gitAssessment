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
    return <ExploreTab />;
  }, []);
  const Filtered = useCallback(() => {
    return <FilteredTab />;
  }, []);
  const renderScene = SceneMap({
    first: ExploreTab,
    second: FilteredTab,
  });

  const renderTabBar = (props: SceneRendererProps) => {
    return (
      <TabBar
        scrollEnabled={false}
        {...props}
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
        swipeEnabled={false}
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
    color: 'black',
    textTransform: 'capitalize',
    lineHeight: 18,
    fontSize: 14,
},
  tabBarTabStyle: {
    height: 40,
  },
});
