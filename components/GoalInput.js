import React, { useS } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';


//Alternative: function GoalInput () {}
const GoalInput = props => {

    //Creating useState, will be used for Text Fields
    const [enteredGoal, setEnteredGoal] = useState('');
    //A function, called when user enter text into text field
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  }

    return (
        <View style={styles.inputContainer}>
            <TextInput
                placeholder="Goal Name"
                style={styles.input}
                onChangeText={goalInputHandler}
                value={enteredGoal} />
                {/* Bind: This pre-configure some areguments which eventually pass the information when this 
                'onPress' function is executed */}
            <Button title="ADD Goal" onPress={props.onAddGoal.bind(this, enteredGoal)} />

        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        width: '80%',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        padding: 10

    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});

export default GoalInput;