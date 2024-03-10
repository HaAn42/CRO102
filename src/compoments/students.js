import { Text, View } from "react-native";
export default function Students({ name, adrees, phone }) {
    return (
        <View>
            <Text>Anhv {name}</Text>
            <Text>HaTinh {adrees}</Text>
            <Text>0921483428 {phone}</Text>
        </View>
    )
}