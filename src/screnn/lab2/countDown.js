import React, { useRef, useState, useEffect } from "react";
import { Button, Text, View } from "react-native";
import { styles } from './styles';

export default function CountDown() {
    const [count, setCount] = useState(30)
    let timeID = useRef()
    console.log(timeID);

    const handlerStart = () => {
        timeID.current = setInterval(() => {
            setCount(prevCount => prevCount - 1)
        }, 1000);
        console.log('handlerStart =>' + timeID.current);
    }
    const handlerStop = () => {
        clearInterval(timeID.current)
        console.log('handlerStop =>' + timeID.current);
    }

    useEffect(() => {
        console.log('userEffect nayf chay moi lan compoment re-render')
    });
    useEffect(() => {
        console.log('userEffect nay chay 1 lan khi compoment render')
    }, []);
    useEffect(() => {
        console.log('userEffect nay chay moi lan khi state count thay doi gia tri')
    }, [count]);
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {count}
            </Text>
            <Button title="Start" onPress={handlerStart} />
            <Button title="Stop" onPress={handlerStop} />
        </View>
    )
}


