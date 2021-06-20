import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const ComponentScreen = () => {
    const greeting = 'Hello there!'
    return (
        <View>
            <Text style={styles.textStyle}>Component Screen</Text>
            <Text>{greeting}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    textStyle:{
        color: 'red',
        fontSize: 38
    }
})
export default ComponentScreen
