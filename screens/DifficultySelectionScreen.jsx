import React from 'react';
import { Text, TouchableOpacity, ScrollView } from 'react-native';
import styles from "../styles/style";
import { useDispatch } from 'react-redux';
import { difficultyUpdate } from "../slice/param";


export default function DifficultySelectionScreen({ navigation }) {
    const difficulty = ['Kolay', 'Orta', 'Zor']
    const dispatch = useDispatch();

    const handleDifficultySelection = (difficulty) => {
        navigation.navigate('Test');
        dispatch(difficultyUpdate(difficulty))

    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.selectText}>Zorluk Seçiniz</Text>

            {difficulty.map((dif, i) => (
                <TouchableOpacity
                    key={i}
                    style={styles.button}
                    onPress={() => handleDifficultySelection(dif)}
                >
                    <Text style={styles.buttonText}>   {dif}   </Text>
                </TouchableOpacity>
            ))}


        </ScrollView>
    );
}

