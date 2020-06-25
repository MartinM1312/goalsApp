import React, { useState } from 'react'
import { Text, View, StyleSheet, Button, } from "react-native";



const GoalItem = props => {

    return (
        <View style={ { flexDirection: 'row', alignItems: 'center', flex: 1 } }>
            <Text style={ styles.taskList }>
                { props.title }
            </Text>
            <Button
                title='eliminar'
                onPress={ props.removeHandler.bind(this, props.id) }
            />

        </View>
    );
};

const styles = StyleSheet.create({
    taskList: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: 'aliceblue',
        borderColor: 'black',
        borderRadius: 6,
        borderWidth: 1,
        justifyContent: 'space-between',
        marginRight: 20,
        flex: 1
    }
});

export default GoalItem;
