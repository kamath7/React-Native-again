import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'

const ImageDetail = ({title, imageSource, imageScore}) => {
    const {width, height} = Dimensions.get('window')
    let widImg = width;
    
    return (
        <View style={styles.cardStyle}>
            <Image style={{width:widImg}}source={imageSource}/>
            <Text style={styles.titleStyle}>{title}</Text>
            <Text style={styles.scoreStyle}>{`Score ${imageScore}`}</Text>
        </View>
    )
}

export default ImageDetail

const styles = StyleSheet.create({
    cardStyle:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        alignContent: 'center',
        borderColor: 'black',
        borderWidth: 1,
        overflow: 'hidden',
        shadowColor: 'grey',
        shadowRadius: 10,
        shadowOpacity: 1,
        padding: 20,
        margin: 10,
        borderRadius: 10
    },
    titleStyle:{
        fontSize: 14,
        fontWeight: 'bold'
    },
    scoreStyle:{
        fontSize: 12
    }
})
