import React, { useState, useContext } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { AuthContext } from '../Context/AuthContext';

export default function NovaObservacao( {id} ) {
    const [observacoesDescricao, setDescricao] = useState("");
    const [observacoesLocal, setLocal] = useState("");
    const [observacoesData, setData] = useState("");
    const [objetoId, setObjetoId] = useState(""); 
    const [sucesso, setSucesso]= useState(false);
    const { usuarioId } = useContext(AuthContext);
    
    async function SalvarObservacao() {
        console.log(id);
        // if (!observacoesDescricao || !observacoesLocal || !observacoesData) {
        //     Alert.alert('Erro', 'Confira todos os campos e tente novamente.');
        //     return;
        // }
        await fetch('http://10.139.75.43:5251/api/Observacoes/CreateObservacoes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                observacoesDescricao: observacoesDescricao,
                observacoesLocal: observacoesLocal,
                observacoesData: "2024-06-18T17:36:50.68",
                objetoId: id,
                usuarioId: usuarioId,
            })
        })
        .then(res => res.json())
        .then(json => {
            console.log(json);
            setSucesso(true);
            setDescricao("");
            setLocal("");
            setData("");
        })
        .catch(err => console.log(err));
    }

    return (
        <View style={styles.container}>

            <TextInput
                placeholder="Descrição da observação"
                style={styles.input}
                value={observacoesDescricao}
                onChangeText={(digitado) => setDescricao(digitado)}
                placeholderTextColor="white"
            />
            <TextInput
                placeholder="Local da observação"
                style={styles.input}
                value={observacoesLocal}
                onChangeText={(digitado) => setLocal(digitado)}
                placeholderTextColor="white"
            />
            <TextInput
                placeholder="Data da observação"
                style={styles.input}
                value={observacoesData}
                onChangeText={(digitado) => setData(digitado)}
                placeholderTextColor="white"
            />
           
            <TouchableOpacity onPress={SalvarObservacao} style={styles.button}>
                <Text style={styles.btnText}>Salvar</Text>
            </TouchableOpacity>

            {sucesso && (
                <View>
                    <Text style={styles.sucessoTxt}>Observação salva com sucesso!</Text>
                </View>
            )}

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 40,
        alignItems: 'center',
    },
    input: {
        width: '90%',
        height: 50,
        borderWidth: 2.5,
        borderColor: 'lightgray',
        borderRadius: 10,
        paddingHorizontal: 20,
        marginBottom: 20,
        fontWeight: '400',
        color: 'white'
    },
    button: {
        width: '90%',
        height: 50,
        backgroundColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    btnText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    sucessoTxt: {
        marginTop: 15,
        fontSize: 16,
        color: 'green',
        fontWeight: 'bold',
    },
});