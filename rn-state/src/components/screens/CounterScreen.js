import React, {useState} from 'react'
import { StyleSheet, Text, View, Button} from 'react-native'

const CounterScreen = () => {
    const [counter, setCounter] = useState(0);
    return (
        <View>
        <Button title="Increase Count" onPress={()=>{
            setCounter(prevState =>counter+1)
        }}/>
        <Button title="Decrease Count" onPress={()=>{
            setCounter(prevState =>counter-1)
        }}/>
            <Text style={{textAlign:"center", marginVertical: 69}}>Current Count: {counter}</Text>
        </View>
    )
}

export default CounterScreen

const styles = StyleSheet.create({})
