import { View, Text, Button,  } from "react-native"
import styles from "./MyStyle"
import MyFancyModal from "./04NavModal/MyFancyModal"
import { useState } from "react"

const getIMCStatus = (imc) => {
    if (imc < 18.5) {
      return "Abaixo do Peso";
    } else if (imc >= 18.5 && imc < 24.9) {
      return "Peso Normal";
    } else {
      return "Acima do Peso";
    }
  };

const Screen03 = ({ navigation, route }) => {
    
    
    const [modalVisible, setModalVisible] = useState(false);
    const imc = route.params.student.imc;
    const imcStatus = getIMCStatus(imc);
  
    
    return (

       

        <View style={styles.container}>
            
            <Text style={styles.header}>Resultado</Text>

            <Text>IMC: {route.params.student.imc.toFixed(2)}</Text>
            <Text>Status: {imcStatus}</Text>
           
            
           
            <Button
                title="HOME"
                onPress={() => navigation.popToTop()}
            />
            <MyFancyModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
        </View>
    )
}

export default Screen03