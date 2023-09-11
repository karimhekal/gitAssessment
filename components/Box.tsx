import React, {ReactNode} from 'react';
import {
  StyleSheet,
  StyleProp,
  ViewStyle,
  // SafeAreaView,
} from 'react-native';
import {Edge, SafeAreaView} from 'react-native-safe-area-context';
import {Theme} from '../Config';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.background,
    // backgroundColor: "blue",
  },
});

interface BoxProps {
  hideStatusBar?: boolean;
  edges?: ReadonlyArray<Edge>;
  style?: StyleProp<ViewStyle>;
  safeAreaOnly?: boolean;
  children: ReactNode;
}
export const Box = ({children, edges, style}: BoxProps) => {
  return (
    <SafeAreaView edges={edges ?? ['top']} style={[styles.container, style]}>
      {children}
    </SafeAreaView>
  );
};
