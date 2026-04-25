import React, { useState } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

function Corpo({ quebrado, setQuebrado }) {
  
  const ArrayFrases = [
    "IT'S OVER, ANAKIN! I HAVE THE HIGH GROUND!",
    "YOU UNDERESTIMATE MY POWER!",
    "YOU WERE THE CHOSEN ONE! IT WAS SAID THAT YOU WOULD DESTROY THE SITH, NOT JOIN THEM!",
    "I HATE YOU!",
    "YOU WERE MY BROTHER, ANAKIN! I LOVED YOU!",
    "DON'T TRY IT.",
    "BRING BALANCE TO THE FORCE, NOT LEAVE IT IN DARKNESS!",
    "I WILL DO WHAT I MUST!"
  ];

  const [textoFrase, setTextoFrase] = useState("THE BATTLE ON MUSTAFAR IS ABOUT TO BEGIN...");

  function alteraStatusBatalha() {
    if (!quebrado) {
      let numeroAleatorio = Math.floor(Math.random() * ArrayFrases.length);
      setTextoFrase(ArrayFrases[numeroAleatorio]);
      setQuebrado(true); 
    } else {
      setTextoFrase("THE BATTLE ON MUSTAFAR IS ABOUT TO BEGIN...");
      setQuebrado(false);
    }
  }

  return (
    // Removido o backgroundColor daqui (foi para o App.js). Adicionado paddingHorizontal.
    <View style={{ 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center', 
        paddingHorizontal: 30 
    }}>
      
      <Text style={{ 
          fontSize: 22, 
          color: quebrado ? '#ff4500' : 'brown', 
          marginBottom: 40, 
          textAlign: 'center',
          fontStyle: 'italic',
          fontWeight: 'bold'
      }}>
        {textoFrase}
      </Text>
      
      <TouchableHighlight 
        onPress={alteraStatusBatalha} 
        style={{ backgroundColor: 'black', padding: 20, borderRadius: 25, borderWidth: 2, borderColor: 'darkred' }}
        underlayColor="darkred"
      >
        <Text style={{ color: 'white', fontWeight: 'bold' }}>
          {quebrado ? "TRY AGAIN" : "JUMP AT OBI-WAN"}
        </Text>
      </TouchableHighlight>

    </View>
  );
}

export default Corpo;