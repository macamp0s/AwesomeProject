import { Alert, Modal,Button, StyleSheet, Text, Pressable, View, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';


const MyFancyModal = ({ modalVisible, setModalVisible }) => {
    const navigation = useNavigation();

    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');
    const [curso, setCurso] = useState('');

    const handleOKPress = () => {
        
        const student = { nome, idade, curso };
      
         {/* passando o valor de student para a screen02*/}
        navigation.navigate('Screen02', { student });
       
        setModalVisible(false);
    };


    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Cadastro</Text>

                    <TextInput
                        style={styles.modalTextInput}
                        placeholder="Nome"
                        placeholderTextColor="grey"
                        value={nome}
                        onChangeText={text => setNome(text)}
                    />

                    <TextInput
                        style={styles.modalTextInput}
                        placeholder="Idade"
                        placeholderTextColor="grey"
                        value={idade}
                        onChangeText={text => setIdade(text)}
                    />

                    <TextInput
                        style={styles.modalTextInput}
                        placeholder="Curso"
                        placeholderTextColor="grey"
                        value={curso}
                        onChangeText={text => setCurso(text)}
                    />

                    <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => setModalVisible(!modalVisible)}>
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

export default MyFancyModal;