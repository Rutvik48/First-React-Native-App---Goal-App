import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';


//Alternative: function GoalInput () {}
const GoalInput = props => {

    //Creating useState, will be used for Text Fields
    const [enteredGoal, setEnteredGoal] = useState('');

    //A function, called when user enter text into text field
    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    }

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    };

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Goal Name"
                    style={styles.input}
                    onChangeText={goalInputHandler}
                    value={enteredGoal} />
                {/* Bind: This pre-configure some areguments which eventually pass the information when this 
                'onPress' function is executed */}

                <View style = {styles.buttonView}>
                    <View style = {styles.button}>
                    <Button title='Cancel' color="red" onPress={props.onCancel} />
                    </View>
                    <View style = {styles.button}>
                    <Button title="Add Goal" onPress={addGoalHandler} />
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    input: {
        width: '80%',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        padding: 10,
        margin: 10

    },
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonView: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '80%',
    },
    button: {
        width: '30%'
    }

});

export default GoalInput;