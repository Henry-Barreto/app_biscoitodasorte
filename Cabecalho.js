import React from 'react';
import { View, Text, Image } from 'react-native';


function Cabecalho({ quebrado }) {
  return (
    <View style={{ alignItems: 'center', marginBottom: 20 }}>
      <Text style={{ fontWeight: 'bold', fontSize: 18, marginBottom: 10 }}>DSV - MOBILE</Text>
      
      
      <Image 
        source={quebrado ? require('./assets/imagem2.png') : require('./assets/imagem.png')} 
        style={{ width: 150, height: 100, resizeMode: 'contain' }} 
      />
    </View>
  );
}

export default Cabecalho;