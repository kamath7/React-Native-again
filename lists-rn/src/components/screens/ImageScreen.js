import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ImageDetail from '../UI/ImageDetail'
const ImageScreen = () => {
    return (
        <View>
            <Text>Welcome to Images</Text>
            <ImageDetail title={"Forest"} imageSource={require('../../../assets/forest.jpg')} imageScore={10}/>
            <ImageDetail title={"Beach"} imageSource={require('../../../assets/beach.jpg')} imageScore={7}/>
            <ImageDetail title={"Mountain"} imageSource={require('../../../assets/mountain.jpg')} imageScore={6}/>
        </View>
    )
}

export default ImageScreen

const styles = StyleSheet.create({})
