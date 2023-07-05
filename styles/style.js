import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 20,
    },
    selectText: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 40,
    },
    button: {
        width: '100%',
        paddingVertical: 30,
        borderRadius: 20,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#336699'
    },
    buttonText: {
        fontSize: 30,
        color: '#fff',
    },
});

export default styles