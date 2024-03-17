import { memo } from "react";
import { Text, View } from "react-native";

function contenMemo({ count }) {
    console.log('contentMemo re-render');
    return (
        <View>
            <Text style={{ fontSize: 40, fontWeight: 'bold', color: 'red' }}>React Memo</Text>
        </View>
    )
}
export default memo(contenMemo);