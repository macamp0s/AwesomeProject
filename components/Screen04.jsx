import { View, Text, Button,  } from "react-native"
import styles from "./MyStyle"
import MyFancyModal from "./04NavModal/MyFancyModal"
import { useState } from "react"


const Screen04 = ({ navigation }) => {
    


    return (
        <View style={styles.container}>
            <Text style={styles.header}>Sobre</Text>
           
            Bem-vindo ao Lorem Ipsum! 
            Estamos empolgados por você estar aqui. 
            
            <Button title="Voltar" onPress={() => navigation.goBack()} />
            
           
        </View>
    )
}

export default Screen04