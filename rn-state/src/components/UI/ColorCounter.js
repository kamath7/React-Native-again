import React from 'react'
import { StyleSheet, Text, View , Button} from 'react-native'

const ColorCounter = () => {
    return (
        <View>
            <Text>Red</Text>
            <Button title="Increase Red"/>
            <Button title="Decrease Red"/>
        </View>
    )
}

export default ColorCounter

const styles = StyleSheet.create({})