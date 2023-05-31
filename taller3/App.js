import React from 'react';
import { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Button,
  Pressable,
  FlatList, ListRenderItemInfo, ScrollView
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


import Formulario from './src/componente/Formulario';
import Pacientes from './src/componente/Paciente';

const App = () => {

  const [modalVisible, setModalVisible] = useState(false);
  const [pacientes, setPacientes] = useState([]);
  const [editarPaciente, setEditarPaciente] = useState(null);

  const handleEditar = item => {
    setEditarPaciente(item);
    setModalVisible(true);
  };

  const handleEliminar = id => {
    const updatedPacientes = pacientes.filter(item => item.id !== id);
    setPacientes(updatedPacientes);
  }

  return (
    <SafeAreaView>
      <ScrollView>

        <Text style={styles.titulo}>Administrar citas</Text>
        <Text style={styles.tituloBold}>Veterinaria</Text>
          <Pressable style={styles.btnNuevaCita}
            onPress={() => setModalVisible(true)}>
            <Text style={styles.btnTextoNuevaCita}>Nueva cita</Text>
          </Pressable>

        {pacientes.length === 0 ? (
            <Text> No hay pacientes </Text>) :
          (
          <View>
          <Text>REGISTRO DE PACIENTES</Text>
              <FlatList
                data={pacientes}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                  return <Paciente item={item} onEliminar={handleEliminar} onEditar={handleEditar} />;
                }}
              />
          </View>
          )
        }
        <Formulario
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          setPacientes={setPacientes}
          pacientes={pacientes}
          editarPaciente={editarPaciente}
          setEditarPaciente={setEditarPaciente}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  titulo: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '900',
    color: Colors.primary,
  },
  tituloBold: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
    color: Colors.primary,
  },
  btnNuevaCita: {
    backgroundColor: '#6D28D9',
    padding: 15,
    borderRadius: 10
  },
  btnTextoNuevaCita: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '900',
    textTransform: 'uppercase'
  }
})
export default App;
