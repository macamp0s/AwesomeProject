import { View, Text, Button } from "react-native"
import styles from "./MyStyle"
import { Image } from "react-native"

const Screen02 = ({navigation,route}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Perfil</Text>
            <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
       style={{width: 70, height: 70, marginBottom:10}} />
            <Text>Nome: {route.params.student.nome}</Text>
            <Text>Idade: {route.params.student.idade}</Text>
            <Text>Curso: {route.params.student.curso}</Text>


            <Button
                title="HOME"
                onPress={() => navigation.navigate('Screen01')}
            />
            
            
        </View>
    )
}

export default Screen02