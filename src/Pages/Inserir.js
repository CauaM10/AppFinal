import { View, Text, ScrollView, TextInput, TouchableOpacity, StyleSheet} from 'react-native'
import React, { useState, useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';


export default function Insirir() {
    const[ objetoNome, setNome] = useState("")
    const[ objetoCor, setCor] = useState("")
    const[ objetoObservacao, setObjetoObservacao] = useState("")
    const[ objetoLocalDesaparecimeto, setObjetoLocalDesaparecimeto] = useState("")
    const[ objetoFoto, setObjetoFoto] = useState("")
    const[ objetoDtDesaparecimeto, setObjetoDtDesaparecimeto] = useState("")
    const[ objetoDtEncontro, setObjetoDtEncontro] = useState("")
    const[ objetoStatus, setObjetoStatus] = useState("")
    const[sucesso, setSucesso] = useState(false)
    const[erro, setErro] = useState(false)
    const { usuarioId } = useContext(AuthContext);

    async function Cadastro(){
        {
            await fetch('http://10.139.75.43:5251/api/Objetos/CreateObjeto', {
              method: 'POST',
              headers: {
                'content-type': 'application/json'
              },
              body: JSON.stringify ({
                    objetoNome: objetoNome,
                    objetoCor: objetoCor,
                    objetoObservacao: objetoObservacao,
                    objetoLocalDesaparecimeto: objetoLocalDesaparecimeto,
                    objetoFoto: objetoFoto,
                    objetoDtDesaparecimeto: objetoDtDesaparecimeto,
                    objetoDtEncontro: objetoDtEncontro,
                    objetoStatus: objetoStatus,
                    usuarioId: usuarioId,              
              })
            })
              .then( res => (res.ok == true) ? res.json() : false)
              .then(json => console.log(json))
              .catch(err => setErro(true))
              
          }
    }

  return (
    <ScrollView contentContainerStyle={{alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#191919'}}>
        { sucesso ? <Text>CERTO</Text> :
        <>  

        <Text style={{color:"white", fontSize: 30, fontWeight: 'bold'}}>Cadastro de Objeto</Text>
        <Text style={{marginTop:10}}></Text>
          <TextInput
            style={css.input}
            placeholder=" Nome do Objeto" placeholderTextColor={'white'} onChangeText={(digitado) => setNome(digitado)} TextInput={objetoNome}
        />
                <TextInput
            style={css.input}
            placeholder="Cor do Objeto" placeholderTextColor={'white'} onChangeText={(digitado) => setCor(digitado)} TextInput={objetoCor}
        />
                <TextInput
            style={css.input}
            placeholder="Observação" placeholderTextColor={'white'} onChangeText={(digitado) => setObjetoObservacao (digitado)} TextInput={objetoObservacao}
        />
                <TextInput
            style={css.input}
            placeholder=" Local do Desaparecimento" placeholderTextColor={'white'} onChangeText={(digitado) => setObjetoLocalDesaparecimeto(digitado)} TextInput={objetoLocalDesaparecimeto}
        />
                <TextInput
            style={css.input}
            placeholder=" Foto do Objeto" placeholderTextColor={'white'} onChangeText={(digitado) => setObjetoFoto(digitado)} TextInput={objetoFoto}
        />
                <TextInput
            style={css.input}
            placeholder=" Objeto Data Desaparecimento" placeholderTextColor={'white'} onChangeText={(digitado) => setObjetoDtDesaparecimeto(digitado)} TextInput={objetoDtDesaparecimeto}
        />
        <TextInput
            style={css.input}
            placeholder=" Objeto Data Encontro" placeholderTextColor={'white'} onChangeText={(digitado) => setObjetoDtEncontro(digitado)} TextInput={objetoDtEncontro}
        />
                <TextInput
            style={css.input}
            placeholder=" Objeto Status" placeholderTextColor={'white'} onChangeText={(digitado) => setObjetoStatus(digitado)} TextInput={objetoStatus}
        />

        </> 

        }
        { erro && <Text>ERRADO</Text>}

      <TouchableOpacity onPress={Cadastro} style={css.BtnInserir}><Text style={css.BtnInserirText}>Inserir</Text ></TouchableOpacity>
    </ScrollView>
  )
}
const css = StyleSheet.create({


  input: {
      width: "90%",
      height: 50,
      borderRadius: 10,
      marginBottom: 15,
      padding: 15,
      backgroundColor: "#262626",
      color: "white"
  },    
   BtnInserir: {
    width: "90%",
    height: 50,
    borderRadius: 10,
    marginTop: 30,
    backgroundColor: "white"
},
  BtnInserirText: {
    color: "black",
    lineHeight: 45,
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold"
}
});