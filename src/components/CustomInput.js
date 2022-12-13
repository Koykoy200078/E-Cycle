import {View, TextInput, StyleSheet, Text, Image} from 'react-native';
import React from 'react';
import {Controller} from 'react-hook-form';

export default function ({
  control,
  name,
  rules = {},
  source = {},
  placeholder,
  secureTextEntry,
}) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
        <>
          <View
            style={[styles.container, {borderColor: error ? 'red' : 'white'}]}>
            <Image source={source} style={styles.icons} />
            <TextInput
              placeholder={placeholder}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              style={styles.input}
              secureTextEntry={secureTextEntry}
            />
          </View>
          {error && (
            <Text style={styles.textError}>{error.message || 'Error'}</Text>
          )}
        </>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: 'white',
    fontSize: 10,
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 15,
    // paddingVertical: 5,
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  icons: {
    width: 30,
    height: 30,
    alignItems: 'center',
    marginVertical: 10,
    // borderWidth: 2,
    // borderColor: '#000',
  },
  input: {
    width: '91%',
    marginLeft: 5,
    fontSize: 15,
  },
  textError: {
    color: 'red',
    alignSelf: 'stretch',
  },
});
