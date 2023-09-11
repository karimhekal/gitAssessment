import React, {ReactNode} from 'react';
import {TextProps as OriginalTextProps, Text as RNText} from 'react-native';

import {Theme} from '../Config';

export interface TextProps extends OriginalTextProps {
  dark?: boolean;
  type?: keyof (typeof Theme)['typography'];
  children: ReactNode;
}

export const Text = (props: TextProps) => {
  const {dark, type, style, children} = props;
  const color = dark ? 'white' : 'black';
  return (
    <RNText
      {...props}
      style={[Theme.typography[type ?? 'body'], {color}, style]}>
      {children}
    </RNText>
  );
};
