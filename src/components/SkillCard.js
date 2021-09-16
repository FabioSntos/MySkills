import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';

export const SkillCard = ({skill}) => {
  return (
    <TouchableOpacity style={Styles.buttonSkill}>
      <Text style={Styles.textSkill}>{skill}</Text>
    </TouchableOpacity>
  );
};

const Styles = StyleSheet.create({
  buttonSkill: {
    backgroundColor: '#1f1e25',
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
    marginVertical: 10,
  },
  textSkill: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
