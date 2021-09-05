import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [allSkills, setAllSkills] = useState([]);

  function handleNewSkill() {
    setAllSkills([...allSkills, newSkill]);
  }
  return (
    <View style={Styles.container}>
      <Text style={Styles.title}>Welcome, Fábio</Text>
      <TextInput
        style={Styles.input}
        placeholder="New Skill"
        placeholderTextColor="#777"
        onChangeText={setNewSkill}
      />
      <TouchableOpacity
        onPress={handleNewSkill}
        activeOpacity={0.7}
        style={Styles.button}>
        <Text style={Styles.buttonText}>Add</Text>
      </TouchableOpacity>
      <Text style={[Styles.title, {marginVertical: 20}]}>My Skills</Text>
      {allSkills.map(skill => (
        <TouchableOpacity style={Styles.buttonSkill}>
          <Text id={skill} style={Styles.textSkill}>
            {skill}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 30,
    paddingVertical: 70,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#1F1e25',
    color: '#fff',
    fontSize: 18,
    padding: 15,
    marginTop: 30,
    borderRadius: 7,
  },
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
  buttonSkill: {
    backgroundColor: '#1f1e25',
    padding: 20,
    borderRadius: 20,
    alignItems: 'center',
  },
  textSkill: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
