import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, StyleSheet, FlatList} from 'react-native';
import {Button} from '../components/Button';
import {SkillCard} from '../components/SkillCard';

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [allSkills, setAllSkills] = useState([]);
  const [greetings, setGreeting] = useState('');

  function handleNewSkill() {
    setAllSkills([...allSkills, newSkill]);
  }

  useEffect(() => {
    const currentHour = new Date().getHours();
    console.log(currentHour);

    if (currentHour <= 12) {
      setGreeting('GoordMorning');
    } else if (currentHour > 12 && currentHour < 18) {
      setGreeting('Good Afternoon');
    } else {
      setGreeting('Good Night');
    }
  }, []);
  return (
    <View style={Styles.container}>
      <Text style={Styles.title}>Welcome, Fábio</Text>
      <Text style={Styles.greetings}>{greetings}</Text>
      <TextInput
        style={Styles.input}
        placeholder="New Skill"
        placeholderTextColor="#777"
        onChangeText={setNewSkill}
      />
      <Button onPress={handleNewSkill} />

      <Text style={[Styles.title, {marginVertical: 20}]}>My Skills</Text>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={allSkills}
        keyExtractor={item => item}
        renderItem={({item}) => <SkillCard skill={item} />}
      />
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
  greetings: {
    color: '#fff',
  },
});
