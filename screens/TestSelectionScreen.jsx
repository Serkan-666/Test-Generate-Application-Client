import React from 'react';
import { Text, TouchableOpacity, ScrollView } from 'react-native';
import styles from "../styles/style";
import { useDispatch } from 'react-redux';
import { topicUpdate } from "../slice/param";

export default function TestSelectionScreen({ navigation }) {
    const topic = ['HTML', 'Css', 'Javascript', 'Typescript', 'React', 'React Native']
    const dispatch = useDispatch();

    const handleTopicSelection = (topic) => {
        navigation.navigate('DifficultySelection');
        dispatch(topicUpdate(topic))
    };
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.selectText}>Bir Konu Seçiniz</Text>
            {topic.map((top, i) => (
                <TouchableOpacity
                    key={i}
                    style={styles.button}
                    onPress={() => handleTopicSelection(top)}
                >
                    <Text style={styles.buttonText}>   {top}   </Text>
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
}

