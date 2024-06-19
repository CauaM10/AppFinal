import { View, Text, StyleSheet, FlatList, ActivityIndicator, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Objeto from '../Components/Objeto'


export default function Home() {
  const [objeto, setObjeto] = useState([]);
  const [loading, setLoading] = useState(true);


  async function getObjeto() {
    await fetch('http://10.139.75.43:5251/api/Objetos/GetAllObjeto', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(json => setObjeto(json))
      .catch(err => console.log(err));
    setLoading(false);
  }


  useEffect(() => {
    getObjeto();
  }, []);

  return (
    <ScrollView contentContainerStyle={css.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#fff" />
      ) : (
        objeto.length > 0 ? (
          <>
            <View style={{backgroundColor: '#262626', height: 130, width: '100%', alignItems: 'center'}}><Image source={require("../../assets/AchadosePerdidos.png")} style={css.logo} /></View>
            <FlatList
              data={objeto}
              renderItem={({ item }) => (
                <Objeto style={{backgroundColor: 'white'}}
                  nome={item.objetoNome}
                  objetoId={item.objetoId}
                  cor={item.objetoCor}
                  objetoLocalDesaparecimeto={item.objetoLocalDesaparecimeto}
                  observacao={item.objetoObservacao}
                  foto={item.objetoFoto}
                  dtdesaparecimento={item.objetoDtDesaparecimeto}
                  dtencontro={item.objetoDtEncontro}
                />
              )}
              keyExtractor={(item) => item.objetoId}
              contentContainerStyle={css.listContainer}
            />
          </>
        ) : (
          <Text style={css.text}>Nenhum objeto encontrado.</Text>
        )
      )}
    </ScrollView>
  )
}

const css = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  },
  text: {
    fontSize: 18,
  },
  listContainer: {
    paddingBottom: 20,
  },
  stories: {
    width: "100%",
    height: 100,
  },
  logo: {
    width: "60%",
    resizeMode: "contain",
    marginTop: -100
    
}
})

