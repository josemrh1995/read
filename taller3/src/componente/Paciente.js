import React, { useState } from 'react';
import { Text, View, StyleSheet, ScrollView, SafeAreaView, Pressable } from 'react-native';

const Paciente = ({ item, botEliminar, botEditar }) => {

    return (

        <SafeAreaView style={styles.contenidoLista}>
            <ScrollView>

                <View>
                    <Text
                        style={styles.info}>Paciente:
                    </Text>
                    <Text>{item.paciente}</Text>
                </View>


                <View>
                    <Text
                        style={styles.info}>Propietario:
                    </Text>
                    <Text>{item.propietario}</Text>
                </View>

                <View>
                    <Text
                        style={styles.info}>Email:
                    </Text>
                    <Text>{item.email}</Text>
                </View>

                <View>
                    <Text
                        style={styles.info}>Teléfono:
                    </Text>
                    <Text>{item.telefono}</Text>
                </View>

                <View>
                    <Text
                        style={styles.info}>Sintomas:
                    </Text>
                    <Text>{item.sintomas}</Text>
                </View>


                <View>
                    <Pressable style={styles.btnEliminarCita}
                        onPress={() => botEliminar(item.id)}>
                        <Text style={styles.btnTextoEliminarCita}>Eliminar</Text>
                    </Pressable>
                    <Pressable style={styles.btnEditarCita}
                        onPress={() => botEditar(item)}>
                        <Text style={styles.btnTextoEditarCita}>Editar</Text>
                    </Pressable>
                </View>


            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({

    info: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#d7f24e',
        marginBottom: 1,
        marginTop: 5,
        fontWeight: '900',
        textAlign: 'center'
    },
    contenidoLista: {
        backgroundColor: '##0833a2',
        flex: 1,
        borderRadius: 10,
        padding: 15,
        marginTop: 30,
        marginHorizontal: 20,
    },
    btnEditarCita: {
        marginVertical: 10,
        backgroundColor: "#d9b3ff",
        paddingVertical: 15,
        marginHorizontal: 90,
        borderRadius: 10
    },
    btnEliminarCita: {
        backgroundColor: '#994d00',
        marginVertical: 10,
        paddingVertical: 15,
        marginHorizontal: 90,
        borderRadius: 10
    },
    btnTextoEditarCita: {
        textAlign: 'center',
        color: '#FFF',
        fontSize: 20,
        fontWeight: '900',
        textTransform: 'uppercase'
    },
    btnTextoEliminarCita: {
        textAlign: 'center',
        color: '#FFF',
        fontSize: 20,
        fontWeight: '900',
        textTransform: 'uppercase'
    }
});

export default Paciente;
