import { View } from "react-native-web"
import { Text } from "react-native"

const HelloRN = ()=>{
    return(
        <View>
            <Text style={{
                fontSize:20,
                fontWeight:"bold"
            }}>
                Olá Mundo React Native!
            </Text>
        </View>

    )
}

export default HelloRN