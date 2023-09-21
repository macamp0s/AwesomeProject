import { View, Text, Button } from "react-native"
import styles from "./MyStyle"
import MyFancyModal from "./04NavModal/MyFancyModal"
import IMC from "./04NavModal/IMC"
import { useState } from "react"


const Screen01 = ({navigation}) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisivel, setModalVisivel] = useState(false);

    return (
        <View style={styles.container}> 
            <Text style={styles.header}>HOME</Text>
            <Button
                title="Cadastro"
                onPress={() => setModalVisible(true)}
            />

            <Button
                title="IMC"
                onPress={() => setModalVisivel(true)}
            />

            <Button
                title="Sobre"
                onPress={() => navigation.navigate('Screen04')}
            />
            {/* <Button title="Voltar" onPress={() => navigation.goBack()} />*/}

          
            <MyFancyModal modalVisible={modalVisible} setModalVisible={setModalVisible} />

            <IMC modalVisivel={modalVisivel} setModalVisivel={setModalVisivel} />
            
        </View>
    )
}

export default Screen01