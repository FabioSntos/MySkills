import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, StyleSheet, FlatList} from 'react-native';
import {Button} from '../components/Button';
import {SkillCard} from '../components/SkillCard';

interface SkillData {
  id: string;
  name: string;
  date?: Date;
}

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [allSkills, setAllSkills] = useState<SkillData[]>([]);
  const [greetings, setGreeting] = useState('');

  function handleNewSkill() {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill,
    };

    setAllSkills(oldState => [...oldState, data]);
  }

  function handleRemoveSkill(id: string) {
    setAllSkills(oldState => oldState.filter(skill => skill.id !== id));
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
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <SkillCard
            onPress={() => handleRemoveSkill(item.id)}
            skill={item.name}
          />
        )}
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
