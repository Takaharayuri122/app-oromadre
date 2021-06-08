import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface ButtonProps extends TouchableOpacityProps {
  title: string,
  icon?: any,
  iconSize?: number,
  mode?: string
}

export function Button({ title = 'Ação', icon, iconSize, mode = 'default', ...props }: ButtonProps) {
  return (
    <TouchableOpacity {...props} style={[
                                          primaryButton.container,
                                          (props.disabled) ? primaryButton.disabled : false,
                                          (mode == 'outline') ? outlineButton.container : false,
                                          props.style
                                        ]}>
      <Text style={[primaryButton.text, (mode == 'outline') ? outlineButton.text : false]}>
        {icon && <AntDesign name={icon} style={primaryButton.icon} size={iconSize} color="black" />} {title}
      </Text>
    </TouchableOpacity>
  )
}


const primaryButton = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 13 },
    width: '100%',
    marginTop: 10,
  },
  text: {
    fontSize: 17,
    color: colors.white,
    fontFamily: fonts.heading,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: colors.white,
  },
  disabled: {
    opacity: 0.6
  }
})

const outlineButton = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderColor: colors.primary,
    borderWidth: 2
  },
  text: {
    color: colors.primary
  }
})