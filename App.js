import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItems'

export default function App() {

  //Creating useState, will be used for Text Fields
  const [enteredGoal, setEnteredGoal] = useState('');

  //This will be used for adding new goals into botom view.
  const [courseGoals, setCourseGoal] = useState([]);

  //A function, called when user enter text into text field
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  }

  //A function, called when used press 'ADD' button to add new goal
  const addGoalHandler = () => {
    console.log(enteredGoal);

    //Adds new element 'enteredGoal' to the existing array state 'courseGoals'
    //This at the bottom might does not return the most current state
    //####setCourseGoal([...courseGoals, enteredGoal]);

    //There for using fuction, at the bottom resole the problem
    //###setCourseGoal(currentGoals => [...currentGoals, enteredGoal]);
    //Commented out upper line to resolve warning while randering data on FlatView

    //Storing data in key-value pair. Which will help resolving an error while showing the data using FlatView
    setCourseGoal(currentGoals => [...currentGoals, { key: Math.random().toString(), value: enteredGoal }]);
  }


  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Goal Name"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal} />
        <Button title="ADD Goal" onPress={addGoalHandler} />

      </View>
      {/* FlatList are used for apps performance
      if ScrollView is sued it trys to load all data when app starts
      which can/will cause app slowdown issue*/}
      <FlatList
        data={courseGoals}
        renderItem={itemData => <GoalItems title={itemData.item.value} />
        } />
    </View>
  );
}

//Style templates, will be used to give style to any object
const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    width: '80%',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 10

  }

});
