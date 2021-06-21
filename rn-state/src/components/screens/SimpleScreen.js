import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ColorCounter from '../UI/ColorCounter'

const SimpleScreen = () => {
    return (
        <View>
            <ColorCounter/>
            <ColorCounter/>
            <ColorCounter/>
        </View>
    )
}

export default SimpleScreen

const styles = StyleSheet.create({})
