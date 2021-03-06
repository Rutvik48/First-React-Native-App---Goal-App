import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItems';
import GoalInput from './components/GoalInput';

export default function App() {

  //This will be used for adding new goals into botom view.
  const [courseGoals, setCourseGoal] = useState([]);

  const [isAddMode, setIsAddMode] = useState(false);

  //A function, called when used press 'ADD' button to add new goal
  const addGoalHandler = goalTitle => {

    //Adds new element 'enteredGoal' to the existing array state 'courseGoals'
    //This at the bottom might does not return the most current state
    //####setCourseGoal([...courseGoals, enteredGoal]);

    //There for using fuction, at the bottom resole the problem
    //###setCourseGoal(currentGoals => [...currentGoals, enteredGoal]);
    //Commented out upper line to resolve warning while randering data on FlatView

    //Storing data in key-value pair. Which will help resolving an error while showing the data using FlatView
    setCourseGoal(currentGoals => [...currentGoals, { key: Math.random().toString(), value: goalTitle }]);

    setIsAddMode(false)
  }

  const removeGoalHandler = goalId => {
    setCourseGoal(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  }

  const cancelGoalButtonPressHandler = () => {
    setIsAddMode(false);
  }

  return (
    <View style={styles.screen}>

      <Button title = "Add New Goal" onPress = {() => setIsAddMode(true)}/>

      <GoalInput 
      visible = {isAddMode} 
      onAddGoal={addGoalHandler}
      onCancel = {cancelGoalButtonPressHandler} />
      
      {/* FlatList are used for apps performance
      if ScrollView is sued it trys to load all data when app starts
      which can/will cause app slowdown issue*/}
      <FlatList
        data={courseGoals}
        renderItem={itemData => <GoalItem 
          id = {itemData.item.id} 
          onDelete = {removeGoalHandler} 
          title={itemData.item.value} />
        } />
    </View>
  );
}

//Style templates, will be used to give style to any object
const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
