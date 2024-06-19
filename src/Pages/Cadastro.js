import { View, Text, ScrollView, TextInput, TouchableOpacity, StyleSheet, Image} from 'react-native'
import React, { useState, useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'




export default function Insirir() {

  const { setCadastro } = useContext( AuthContext );

    const[ usuarioNome, setNome] = useState("")
    const[ usuarioEmail, setEmail] = useState("")
    const[ usuarioSenha, setSenha] = useState("")
    const[ usuarioTelefone, setTelefone] = useState("")
    const[sucesso, setSucesso] = useState(false)
    const[erro, setErro] = useState(false)

    async function Cadastro(){
        {
            await fetch('http://10.139.75.43:5251/api/Usuarios/CreateUser', {
              method: 'POST',
              headers: {
                'content-type': 'application/json'
              },
              body: JSON.stringify ({
                usuarioNome: usuarioNome,
                usuarioEmail: usuarioEmail,
                usuarioSenha: usuarioSenha,
                usuarioTelefone: usuarioTelefone
                
              })
            })
              .then( res => (res.ok == true) ? res.json() : false)
              .then(json => console.log(json))
              .catch(err => setErro(true))
              
          }
    }

  return (
    <ScrollView contentContainerStyle={{alignItems: 'center',  height: '100%', backgroundColor: '#191919'}}>
        { sucesso ? <Text style={{color: 'white'}}> Cadastro efetuado com sucesso </Text> :
        <>  
        <Image source={require("../../assets/AchadosePerdidos.png")} style={css.logo} />
        <Text style={{fontSize: 15, color: "white", fontWeight: "bold", marginTop: -80 }}>CADASTRA-SE</Text>
        <Text style={{marginTop: 20}}></Text>
        
                <TextInput style={css.input}
            
            placeholder=" Nome" placeholderTextColor={'white'} onChangeText={(digitado) => setNome(digitado)} TextInput={usuarioNome}
        />
                <TextInput style={css.input}
            
            placeholder=" Email" placeholderTextColor={'white'} onChangeText={(digitado) => setEmail(digitado)} TextInput={usuarioEmail}
        />
                <TextInput style={css.input}
            
            placeholder=" Telefone" placeholderTextColor={'white'} onChangeText={(digitado) => setTelefone(digitado)} TextInput={usuarioTelefone}
        />
                <TextInput style={css.input}
            
            placeholder=" Senha" placeholderTextColor={'white'} onChangeText={(digitado) => setSenha(digitado)} TextInput={usuarioSenha}
        />

        </> 

        }
        { erro && <Text style={{color: 'white'}}>ERRADO</Text>}

      <TouchableOpacity onPress={Cadastro} style={css.btnCadastro}><Text style={css.btnLoginText}>CADASTRAR</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => setCadastro( false ) } style={css.btnLogin}><Text style={css.btnLoginText}>VOLTAR PARA O LOGIN</Text></TouchableOpacity>
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
  btnCadastro: {
    width: "90%",
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 30,
    backgroundColor: "#0195fd"
  },
  btnLoginText: {
    color: "white",
    lineHeight: 45,
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold"
  }, 
  btnLogin: {
    width: "90%",
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 15,
    backgroundColor: "#262626"
  },

    btnLoginText: {
      color: "white",
      lineHeight: 45,
      textAlign: "center",
      fontSize: 15,
      fontWeight: "bold"
  },
  logo: {
      width: "60%",
      resizeMode: "contain"
  }
  
});
