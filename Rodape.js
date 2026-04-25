import React from 'react';
import { View, Text } from 'react-native';

function Rodape({ quebrado }) {
  return (
    <View style={{ alignItems: 'center', marginBottom: 30 }}>
      {/* Se estiver quebrado, a fonte fica cinza claro, senão fica preta */}
      <Text style={{ fontSize: 12, color: quebrado ? 'lightgray' : 'black' }}>
        HENRIQUE BARRETO E MATEUS BASTOS   25/04/2026
      </Text>
    </View>
  );
}

export default Rodape;