import React, { useState } from 'react';
import { Button, TextInput, View, StyleSheet, Modal } from "react-native";


const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const inputHandler = (enteredGoal) => {
        setEnteredGoal(enteredGoal);
    };

    const addGoalHandler = () => {
        props.addGoalHandler(enteredGoal);
        setEnteredGoal('')
    }

    return (
        <Modal visible={ props.visible } animationType={ 'fade' }>
            <View style={ styles.inputContainer }>
                <TextInput
                    style={ styles.textIn }
                    placeholder='Ingresar texto'
                    onChangeText={ inputHandler }
                    value={ enteredGoal }
                    clearTextOnFocus={ true }
                />
                <View style={ styles.buttonContainer }>
                    <View style={ { width: '25%' } }>
                        <Button title='ADD' onPress={ addGoalHandler } />
                    </View>
                    <View>
                        <Button title='CANCEL' color='red' onPress={ props.onCancel } />
                    </View>
                </View>


            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    textIn: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        width: '80%',
        marginBottom: 20,
    },

    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
});

export default GoalInput;