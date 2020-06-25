import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    ScrollView,
    FlatList
} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from "./components/GoalInput";

export default function App() {
    const [courseGoals, setCourseGoals] = useState([]);

    const addGoalHandler = goalTitle => {
        setCourseGoals(currentGoals => [
            ...currentGoals,
            { key: Math.random().toString(), value: goalTitle }
        ]);
        setIsAddMode(false);
    };

    const removeGoalHandler = goalId => {
        setCourseGoals(currentGoals => {
            return currentGoals.filter((goal) => goal.key !== goalId);
        });
    };

    const [isAddMode, setIsAddMode] = useState(false);

    const cancelAdditionHandler = () => {
        setIsAddMode(false);
    };

    return (
        <View style={ styles.mainScreen }>
            <Button title={ 'New Goal' }
                onPress={ () => setIsAddMode(true) }
            />
            <GoalInput
                addGoalHandler={ addGoalHandler }
                visible={ isAddMode }
                onCancel={ cancelAdditionHandler }
            />
            <View style={ { flex: 1 } }>
                <FlatList
                    data={ courseGoals }
                    renderItem={ itemData => (
                        <GoalItem id={ itemData.item.key }
                            removeHandler={ removeGoalHandler }
                            title={ itemData.item.value }
                        />
                    ) }

                />
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    mainScreen: {
        paddingVertical: 60,
        paddingHorizontal: 40,
        flex: 1
    }

});