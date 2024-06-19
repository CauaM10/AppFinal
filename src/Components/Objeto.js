
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import Observacao from './Observacao';

export default function Objeto({ nome, objetoId, cor, foto, observacao, objetoLocalDesaparecimeto, dtdesaparecimento }) {

    const [detalhes, setDetalhes] = useState(false);
    const [observacoes, setObservacoes] = useState(false);

    const altura = () => {
        if (observacoes) return 800;
        if (detalhes) return 600;
        return 460;
    };

    const mostrarDetalhes = () => {
        setDetalhes(!detalhes);
        if (observacoes) setObservacoes(false);
    };

    const mostrarObservacao = () => {      
        setObservacoes(!observacoes);
        if (detalhes) setDetalhes(false);
    };

    return (
        <View style={[css.box, { height: altura() }]}>
            <View style={css.header}>
                <Text style={css.title}>{nome}</Text>
            </View>
            <View style={css.boxImage}>
                <Image style={css.image} source={{ uri: foto }}></Image>
            </View>
            <View style={css.descriptionBox}>
                <Text style={css.descriptionText}> </Text>
            </View>
           
            <View style={css.buttonsContainer}>
                <TouchableOpacity style={[css.infos, detalhes && css.infoAparecendo]} onPress={mostrarDetalhes}>
                    <Text style={css.infosTxt}>Detalhes</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[css.infos, observacoes && css.infoAparecendo]} onPress={mostrarObservacao}>
                    <Text style={css.infosTxt}>Nova Observação</Text>
                </TouchableOpacity>
            </View>

            
            {detalhes && (
                <View style={css.categoryBox}>

                    <Text style={css.categoryText}>Cor do Objeto: <Text style={{color:'#B4D1EB'}}>{cor}</Text></Text>

                    <Text style={css.categoryText}>Observação: <Text style={{color:'#B4D1EB'}}>{observacao}</Text></Text>

                    <Text style={css.categoryText}>Local do Desaparecimento: <Text style={{color:'#B4D1EB'}}>{objetoLocalDesaparecimeto}</Text></Text> 

                    <Text style={css.categoryText}>Data do Desaparecimento: <Text style={{color:'#B4D1EB'}}>{dtdesaparecimento}</Text></Text>
                </View>
            )}

            {observacoes && (
                <Observacao id={objetoId} />
            )}

            
        </View>
    )
}

const css = StyleSheet.create({
    box: {
        borderColor:"white",
        borderRadius: 10,
        borderWidth: 3,
        marginTop: 30,
        width: 370,
        margin: '0 auto',
        backgroundColor: 'black'
    },
    header: {
        padding: 13,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        backgroundColor: '#262626',
        alignItems: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white'
    },
    boxImage: {
        
        width: "80%",
        marginTop: 20,
        backgroundColor: 'white',
        height: 300,
        marginBottom: 10,
        padding: 20,
        marginLeft: 30,
        borderRadius: 4
    },
    image: {
        width: "100%",
        height: "100%",
        borderRadius: 5,
        resizeMode: "cover",
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
    },
    descriptionBox: {
        marginBottom: 10,
    },
    descriptionText: {
        fontWeight: '500',
        marginLeft: 20,
        fontSize: 19,
    },

    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 10,
    },
    infos: {
        width: '38%',
        height: 40,
        marginTop: -23,
        backgroundColor: '#262626',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    infosTxt: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    infoAparecendo: {
        backgroundColor: '#262626',
    },

    categoryBox: {
        paddingVertical: 20,
        
    },
    categoryText: {
        fontSize: 16,
        color: 'white',
        borderRadius: 10,
        marginLeft: 30
    },
});
