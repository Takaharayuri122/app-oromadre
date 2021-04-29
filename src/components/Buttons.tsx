import React from 'react';
import { Text, StyleSheet, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface ButtonProps extends TouchableOpacityProps {
  title: string,
  icon?: any,
  iconSize?: number
}

export function PrimaryButton({ title, icon, iconSize, ...props }: ButtonProps) {
  return (
    <TouchableOpacity style={styles.container} {...props}>
      <Text style={styles.text}>
        {icon && <AntDesign name={icon} style={styles.icon} size={iconSize} color="black" />} {title}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 13 },
    width: '100%',
  },
  text: {
    fontSize: 18,
    color: colors.white,
    fontFamily: fonts.heading,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: colors.white,
  }
})