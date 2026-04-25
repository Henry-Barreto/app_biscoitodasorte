import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

// Recebendo o estado e a função do App.js
function Corpo({ quebrado, setQuebrado }) {
  
  function alteraState() {
    
    setQuebrado(!quebrado); 
  }

  return (
    
    <View style={{ 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center', 
        backgroundColor: quebrado ? 'gray' : 'transparent',
        width: '100%' 
    }}>
      
      <Text style={{ 
          fontSize: 18, 
          color: quebrado ? 'white' : 'brown', 
          marginBottom: 20, 
          textAlign: 'center',
          paddingHorizontal: 20
      }}>
        {quebrado ? "A sorte acompanha os audazes!" : "Clique para abrir o biscoito"}
      </Text>
      
      <TouchableHighlight 
        onPress={alteraState} 
        style={{ backgroundColor: 'darkred', padding: 20, borderRadius: 25 }}
        underlayColor="red"
      >
        <Text style={{ color: 'white', fontWeight: 'bold' }}>
          {quebrado ? "RESETAR" : "QUEBRAR BISCOITO"}
        </Text>
      </TouchableHighlight>

    </View>
  );
}

export default Corpo;