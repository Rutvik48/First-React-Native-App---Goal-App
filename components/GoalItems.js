import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GoalItem = props => {
    return (
        // TouchableOpacity is used to achive touch functionality of Goal title.
        //activeOpacity change how transprenet view will get when it is touched
        //onPress will be triggered when user clicks on the view  
        //TouchablelHighlight can be used instead of TouchableOpacity.... 
        <TouchableOpacity activeOpacity = {0.5} onPress = {props.onDelete.bind(this, props.id)}>
            <View style={styles.listItems}>
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    listItems: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1
    }
});

export default GoalItem;