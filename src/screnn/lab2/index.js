import React, { useState } from "react";
import { Button, Text, View } from "react-native";
import { styles } from './styles';

export default function UserStateScreen() {
    const [counter, setCount] = useState(0);
    const handleIncrease = () => {
        setCount(counter + 1);
    }
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {counter}
            </Text>
            <Button title="Tăng" onPress={handleIncrease}>
            </Button>
        </View>
    )
}


