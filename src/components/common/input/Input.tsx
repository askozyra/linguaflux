import React, { useEffect, useState } from 'react';
import {
  TouchableWithoutFeedback,
} from 'react-native';
import * as Kitten from '@ui-kitten/components';
import { CustomInputStyles } from './Input.styles';

interface Props {
  required?: boolean;
  allowHideText?: boolean;
  textValueChanged?: (value: string) => void;
};

const Input = (props: Kitten.InputProps & Props) => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const captionState = useState('');
  const textValue = useState('');

  useEffect(() => {
    setSecureTextEntry(props.allowHideText ?? false);
  }, [])

  const handleRequiredFieldEmpty = () => {
    textValue[0] ? captionState[1]('') : captionState[1]('Error: Required field is empty');
  }

  const handleChangeText = (value: string) => {
    textValue[1](value);
    if (props.textValueChanged)
      props.textValueChanged(value);
  }

  const toggleSecureTextEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  }

  const togglePasswordIcon = (props: any) => (
    <TouchableWithoutFeedback onPress={toggleSecureTextEntry}>
      <Kitten.Icon
        {...props}
        name={secureTextEntry ? 'eye-off' : 'eye'}
      />
    </TouchableWithoutFeedback>
  );

  return (
    <Kitten.Input
      {...props}
      onBlur={props.required ? handleRequiredFieldEmpty : () => { }}
      caption={captionState[0]}
      status={captionState[0] ? 'danger' : 'basic'}
      style={CustomInputStyles.Layout}
      value={textValue[0]}
      onChangeText={value => handleChangeText(value)}
      label={props.required ? props.label + ' *' : props.label}
      accessoryRight={props.allowHideText ? togglePasswordIcon : (<></>)}
      secureTextEntry={secureTextEntry}
    />
  );
}

export default Input;