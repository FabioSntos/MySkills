import React from 'react';

import {
  Text,
  TouchableOpacity,
  StyleSheet,
  TouchableOpacityProps,
} from 'react-native';

type ButtonProps = TouchableOpacityProps;

export const Button = ({onPress}: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      // onPress={handleNewSkill}
      activeOpacity={0.7}
      style={Styles.button}>
      <Text style={Styles.buttonText}>Add</Text>
    </TouchableOpacity>
  );
};

const Styles = StyleSheet.create({
  button: {
    backgroundColor: '#A370F7',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },
});
