import React, {useState} from 'react';
import {
  TextInput,
  StyleSheet,
  I18nManager,
  View,
  TouchableOpacity,
} from 'react-native';
import {Theme} from '../Config';
import Icon from 'react-native-vector-icons/Feather';
import {FormFieldProps} from '../interfaces/interfaces';

export const FormField = React.forwardRef<TextInput, FormFieldProps>(
  (props, ref) => {
    const [value, setValue] = useState<string>('');
    const [inputHeight, setInputHeight] = useState<number>(17);
    const [focused, setFocused] = useState<boolean>(false);
    const [isPlaceholderVisible, setIsPlaceholderVisible] =
      useState<boolean>(true);
    return (
      <View style={{width: props.width || '100%'}}>
        <TextInput
          ref={ref}
          {...props}
          selectionColor={Theme.colors.primary}
          keyboardAppearance="dark"
          autoCapitalize="none"
          returnKeyType={props.returnKeyType}
          onSubmitEditing={props.onSubmitEditing}
          onFocus={() => {
            setFocused(true);
            // setIsPlaceholderVisible((old) => !old);
          }}
          onContentSizeChange={({nativeEvent}) => {
            setInputHeight(nativeEvent.contentSize.height);
          }}
          onBlur={() => {
            setFocused(false);
            setIsPlaceholderVisible(true);
          }}
          style={[styles.field, focused && styles.focused, props.style]}
          onChangeText={(text: string) => {
            setValue(text);
            props.onChangeText && props.onChangeText(text);
          }}
          value={value}
          placeholder={isPlaceholderVisible ? props.placeholder : ''}
        />
        {props.clearButton && value.length > 0 && (
          <TouchableOpacity
            onPress={() => {
              setValue('');
            }}
            style={{
              borderRadius: 1000,
              display: 'flex',
              justifyContent: 'center',
              padding: Theme.spacing.s / 2,
              alignItems: 'center',
              width: Theme.spacing.l,
              height: Theme.spacing.l,
              position: 'absolute',
              right: 5,
              top: '18%',
            }}>
            <Icon color={'black'} name="x" />
          </TouchableOpacity>
        )}
      </View>
    );
  },
);

const styles = StyleSheet.create({
  field: {
    borderWidth: 1,
    color: Theme.colors.secondary,
    fontFamily: Theme.fonts.EnglishRegular,
    backgroundColor: Theme.colors.background,
    padding: 10,
    borderColor: Theme.colors.secondary,
    borderRadius: 8,
    writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr',
    textAlign: I18nManager.isRTL ? 'right' : 'left',
  },
  focused: {
    borderColor: Theme.colors.primary,
    backgroundColor: Theme.colors.card,
    borderWidth: 2,
  },
});
