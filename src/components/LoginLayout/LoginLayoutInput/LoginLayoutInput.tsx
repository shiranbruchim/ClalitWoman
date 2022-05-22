import useTheme from 'common/Hooks/useTheme';
import {SlideInView} from 'common/Theme/animation/SlideInView';
import {SlideInProps} from 'common/Theme/animation/SlideInView.types';
import React, {useState} from 'react';
import {Control, Controller} from 'react-hook-form';
import {
  Image,
  StyleProp,
  Text,
  TextInput,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {LoginLayoutInputStyle as styles} from './LoginLayoutInput.style';
import {LoginLayoutInputProps} from './LoginLayoutInput.types';

export type UseFieldArrayProps<
  TKeyName extends string = 'id',
  TControl extends Control = Control,
> = {
  name: string;
  keyName?: TKeyName;
  control?: TControl;
};

const LoginLayoutInputComponent = (props: LoginLayoutInputProps) => {
  const {title, subTitle, name, control, password, error} = props;
  const {images} = useTheme();

  const [active, setActive] = useState(false);
  const [blur, setBlur] = useState(false);
  const [hideContent, setHideContent] = useState(true);

  const iconImg = images['eye' as keyof typeof images];

  const labelAppear = (): JSX.Element | null => {
    if (!active) {
      return null;
    }

    const slideInViewProps: SlideInProps = {
      finalHeight: 40,
      durationTime: 300,
      style: {
        position: 'absolute',
        bottom: 30,
        right: 0,
      },
    };

    return (
      <SlideInView {...slideInViewProps}>
        <Text style={styles.InputTitleText}>{title}</Text>
      </SlideInView>
    );
  };

  const onChangeFunction = (value: string, onChange: (val: string) => void) => {
    onChange?.(value);
    !value ? setActive(false) : setActive(true);
  };

  const errorMessage =
    error && name in error ? error[name as keyof typeof error]?.message : null;

  const subTitleText = () => {
    if (errorMessage) {
      return errorMessage;
    }
    if (subTitle) {
      return subTitle;
    }
    return null;
  };

  const TextStyling: (boolean | ViewStyle | string | null | undefined)[] = [
    styles.InputTitleTextInput,
    blur && styles.InputBlueBorder,
    active && styles.InputTitleTextInputBlur,
    errorMessage && styles.InputErrorBorder,
  ];

  const SubTextStyling: (string | {color: string} | null | undefined)[] = [
    styles.InputSubTitleText,
    errorMessage && styles.errorMessage,
  ];

  return (
    <View style={styles.InputTitleContainer}>
      {labelAppear()}
      <Controller
        control={control as never}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={TextStyling as StyleProp<TextStyle>}
            secureTextEntry={password && hideContent}
            onBlur={onBlur}
            onChangeText={val => onChangeFunction(val, onChange)}
            value={value}
            placeholder={title}
            placeholderTextColor="#50757D"
            onFocus={() => setBlur(true)}
            clearTextOnFocus={false}
          />
        )}
        name={name}
      />
      {password && active && (
        <TouchableOpacity
          style={styles.eyeIconContainer}
          onPress={() => setHideContent(prev => !prev)}>
          <Image style={styles.eyeIcon} source={iconImg} />
        </TouchableOpacity>
      )}
      <Text style={SubTextStyling as StyleProp<TextStyle>}>
        {subTitleText()}
      </Text>
    </View>
  );
};

export default LoginLayoutInputComponent;
