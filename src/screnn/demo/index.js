import React, { useState } from "react";
import { Button, Text, View } from "react-native";
import { styles } from './styles';

export default function UserStateScreen() {
    const [count, setCount] = useState(0);
    const handleIncrease = () => {
        setCount(count + 1);
    }
    return (
        <View style={styles.container}> 
            <Text style={styles.text}>
                {count}
            </Text>
            <Button title="Tăng" onPress={handleIncrease}>
            </Button>
        </View>
    )
}


