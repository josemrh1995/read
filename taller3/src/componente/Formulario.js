import React, {useState} from "react";
import { Modal, Pressable, SafeAreaView, ScrollView, Text, TextInput, View, StyleSheet, Alert } from 'react-native';


const Formulario = ({modalVisible, setModalVisible, setPacientes, pacientes}) => {
    const [paciente, setPaciente] = useState('')
    const [propietario, setPropietario] = useState('')
    const [email, setEmail] = useState('')
    const [telefono, setTelefono] = useState('')
    const [sintomas, setSintomas] = useState('')

    const handleCita = () =>{
        if ([paciente,propietario,telefono,sintomas].includes('')){
            Alert.alert('Error','Toodos los campos son obligatorios')
            return 
        }
        

    const nuevoPaciente = {id: Date.now(),paciente,propietario,email,telefono,sintomas}

    if (editarPaciente) {
        const index = pacientes.findIndex(item => item.id === editarPaciente.id);
        const updatedPacientes = [...pacientes];
        updatedPacientes[index] = NuevoPaciente;
        setPacientes(updatedPacientes);
        setEditarPaciente(null);
    } else {

    setPacientes([...paciente,nuevoPaciente])
    setPaciente('')
    setPropietario('')
    setEmail('')
    setTelefono('')
    setSintomas('')
    setModalVisible(false)
    //setModalVisible(!modalVisible)
    }
    }
    return (
        <Modal
            animationType = 'slide'
            visible = {modalVisible}
        >
            <SafeAreaView style={styles.contenido}>
                <ScrollView>
                    <Text>Nueva Cita</Text>

                    <Pressable
                        style = {styles.btnCancelar}
                        onLongPress={() => {setEditarPaciente(null); setModalVisible(false)}}
                    >
                        <Text style={styles.btnCancelarTexto}> X Cancelar </Text>
                    </Pressable>
                    <View style={styles.campo}>
                        <Text style={styles.label}>Nombre Mascota</Text>
                        <TextInput style={styles.input} 
                        placeholder="Nombre del paciiente"
                        placeholderTextColor={'#666'}
                        value={paciente}
                        onChangeText= {setPaciente}
                        ></TextInput>
                    </View>
                    <View style={styles.campo}>
                        <Text style={styles.label}>Nombre Propietario</Text>
                        <TextInput style={styles.input} 
                        placeholder="Nombre del propietario de la cascota"
                        placeholderTextColor={'#666'}
                        value={propietario}
                        onChangeText= {setPropietario}
                        ></TextInput>
                    </View>
                    <View> style={styles.campo}
                        <Text style={styles.label}>Email</Text>
                        <TextInput style={styles.input} 
                        placeholder="Email del propietario"
                        placeholderTextColor={'#666'}
                        value={email}
                        onChangeText= {setEmail}
                        keyboardType= 'email-address'
                        ></TextInput>
                    </View>
                    <View style={styles.campo}>
                        <Text style={styles.label}>Telefono de contacto</Text>
                        <TextInput style={styles.input} 
                        placeholder="Telefono de contacto"
                        placeholderTextColor={'#666'}
                        value={telefono}
                        onChangeText= {setTelefono}
                        keyboardType= 'number-pad'
                        maxLength={10}
                        ></TextInput>
                    </View>
                    <View>
                        <Text style={styles.label}>Sintomas</Text>
                        <TextInput style={[styles.input,styles.sintomas]} 
                        placeholder="Especifique los sintomas del paciente"
                        placeholderTextColor={'#666'}
                        multiline= {true}
                        numberOfLines={5}
                        value={sintomas}
                        onChangeText= {setSintomas}
                        ></TextInput>
                    </View>
                    <Pressable
                        style = {styles.btnCancelar}
                        onPress={handleCita}
                        
                    >
                        <Text style={styles.btnTextoNuevaCita}> Agregar paciente </Text>
                    </Pressable>
                </ScrollView>
            </SafeAreaView>
        </Modal>
    )
}

const styles = StyleSheet.create({
    contenido: {
        backgroundColor: '#6D28D9',
        flex: 1,
    },
    titulo:{
      textAlign: 'center',
      fontSize: 20,
      fontWeight: '900',
    },
    label:{
        color:'#FFF',
        marginBottom: 10,
        marginTop: 15,
        fontWeight: '500'
    },  
    input:{
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10
    },
    sintomas:{
        height:100
    },
    btnCancelar:{
    backgroundColor: '#5827A4',
    padding:15,
    borderRadius: 10
    },
    btnTextoNuevaCita:{
      textAlign: 'center',
      fontSize: 20,
      fontWeight: '900',
      textTransform: 'uppercase'
    }
})
export default Formulario