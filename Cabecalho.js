import React from 'react';
import { View, Text, Image } from 'react-native';

function Cabecalho({ quebrado }) {
  return (
    <View style={{ alignItems: 'center', marginTop: 60 }}>
      {/* O texto fica branco se o fundo ficar escuro */}
      <Text style={{ fontWeight: 'bold', fontSize: 18, marginBottom: 15, color: quebrado ? 'white' : 'black' }}>DSV - MOBILE</Text>
      
      <Image 
        source={quebrado ? require('./assets/imagem2.png') : require('./assets/imagem.png')} 
        style={{ width: '90%', height: 250, resizeMode: 'contain' }} 
      />
    </View>
  );
}

export default Cabecalho;