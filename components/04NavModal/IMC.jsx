import { Alert, Modal,Button, StyleSheet, Text, Pressable, View, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';


const IMC = ({ modalVisivel, setModalVisivel }) => {
    const navigation = useNavigation();

    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
   
    const imc = peso / (altura * altura);
    
    const handleOKPress = () => {
        
        const student = { peso, altura, imc}; 
        navigation.navigate('Screen03', { student });
        setModalVisivel(false);
    };

    return (
         
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisivel}
                onRequestClose={() => {
                    //Alert.alert('Modal has been closed.');
                    setModalVisivel(!modalVisivel);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>IMC</Text>
                       
                        <TextInput style={styles.modalTextInput}
                      placeholder="peso"
                      placeholderTextColor="grey" 
                      value={peso}
                      onChangeText={text => setPeso(text)}
                    />

                        <TextInput style={styles.modalTextInput}
                        placeholder="altura"
                        placeholderTextColor="grey"   
                        value={altura}
                        onChangeText={text => setAltura(text)}                 />

                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisivel(!modalVisivel)}>
                            <Text style={styles.textStyle}>Cancelar</Text>
                        </Pressable>

                        <Pressable
                        style={[styles.button, styles.buttonOK]}
                        onPress={handleOKPress}>
                        <Text style={styles.textStyle}>OK</Text>
                        </Pressable>
                     

                     
                    </View>
                </View>
            </Modal>
         
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        marginBottom:10,
        width: 150,
    },

    
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    buttonOK: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },

    modalTextInput: {
        marginBottom: 15,
        textAlign: 'left',
        borderWidth: 1,
        
    },

    modalPlaceholder:{
        color:'red',
    },
});

export default IMC;