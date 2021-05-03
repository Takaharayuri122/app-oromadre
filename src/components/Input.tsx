import React from 'react';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import config from '../styles/config';


export function Input({ ...props }) {
  return (
    <TextInput style={styles.field}  {...props} placeholder={props.placeholder} autoCompleteType={props.type} />
  )
};

const styles = StyleSheet.create({
  field: config.field
})