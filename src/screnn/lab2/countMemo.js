import { useState } from "react";
import { Button, Text, View } from "react-native";
import ContentMemo from "./contentMemo";
import { styles } from './styles';

export default function CountMemo() {
    const [counter, setcounter] = useState(1)
    const [count, setCount] = useState(1)
    const handlerIncrease = () => {
        setcounter(counter + 1)
    }
    const handlerIncrease2 = () => {
        setCount(count + 1)
    }
    return (
        <View style={styles.container}>
            <ContentMemo count={count} />
            <Button title='Click Count' onPress={handlerIncrease2}></Button>
            <Text>{counter}</Text>
            <Button title='Click Counter' onPress={handlerIncrease}></Button>
        </View>
    )
}