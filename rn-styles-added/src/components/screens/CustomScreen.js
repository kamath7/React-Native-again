import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const CustomScreen = () => {
    const name = "Lord Kams"
    return (
        <View>
            <Text style={styles.headingText}>Getting started with React Native</Text>
            <Text style={styles.para}>My name is {name}</Text>
        </View>
    )
}

export default CustomScreen

const styles = StyleSheet.create({
    headingText: {
        fontSize: 45,
        color: 'violet',
    },
    para:{
        fontSize: 20,
        color: 'green'
    }
})
