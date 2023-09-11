import React, {useEffect} from 'react';

import {View, StyleSheet, ViewStyle} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
  cancelAnimation,
  withSequence,
} from 'react-native-reanimated';
interface PlaceHolderPropsI {
  children: React.ReactNode;
  indicator?: boolean;
  innerContainerStyle?: ViewStyle;
  containerStyle?: ViewStyle;
}
const CommentPlaceHolder = ({
  children,
  indicator = true,
  containerStyle,
}: PlaceHolderPropsI) => {
  const fading = useSharedValue(0);

  useEffect(() => {
    fading.value = withSequence(
      withTiming(0.2, {duration: 500}),
      withRepeat(withTiming(0.6, {duration: 500}), -1, true),
      withTiming(1, {duration: 500}),
    );

    return () => cancelAnimation(fading);
  }, []);
  const animatedStyles = useAnimatedStyle(() => {
    return {
      opacity: indicator ? fading.value : 1,
    };
  });

  return (
    <View style={containerStyle}>
      <View>
        <Animated.View style={[animatedStyles]}>{children}</Animated.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignSelf: 'flex-start',
    paddingTop: 10,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
  },
  innerContainer: {backgroundColor: 'white', width: '100%', height: 70},
});

export default React.memo(CommentPlaceHolder, () => false);
