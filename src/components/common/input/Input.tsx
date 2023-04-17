import React, { useEffect, useState } from 'react';
import {
  TouchableWithoutFeedback,
} from 'react-native';
import * as Kitten from '@ui-kitten/components';

interface Props {
  required?: boolean;
  allowHideText?: boolean;
  textValueChanged?: (value: string) => void;
};

const Input = (nativeInputProps: any, customProps: Props) => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const captionState = useState('');
  const textValue = useState('');

  useEffect(() => {
    setSecureTextEntry(customProps.allowHideText ?? false);
  }, [])

  const handleRequiredFieldEmpty = () => {
    textValue[0] ? captionState[1]('') : captionState[1]('Error: Required field is empty');
  }

  const handleChangeText = (value: string) => {
    textValue[1](value);
    if (customProps.textValueChanged)
      customProps.textValueChanged(value);
  }

  const toggleSecureTextEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  }

  const togglePasswordIcon = (props: React.ReactElement) => (
    <TouchableWithoutFeedback onPress={toggleSecureTextEntry}>
      <Kitten.Icon
        {...props}
        name={secureTextEntry ? 'eye-off' : 'eye'}
      />
    </TouchableWithoutFeedback>
  );

  return (
    <Kitten.Input
      {...nativeInputProps}
      onBlur={customProps.required ? handleRequiredFieldEmpty : null}
      caption={captionState[0]}
      status={captionState[0] ? 'danger' : 'basic'}
      style={{
        borderWidth: 0,
        borderBottomWidth: 2,
        backgroundColor: '#fff1'
      }}
      value={textValue[0]}
      onChangeText={handleChangeText}
      label={customProps.required ? nativeInputProps.label + ' *' : nativeInputProps.label}
      accessoryRight={customProps.allowHideText ? togglePasswordIcon : null}
      secureTextEntry={secureTextEntry}
    />
  );
}

export default Input;