import React, { useState } from 'react';
import { View } from 'react-native';
import Cabecalho from './Cabecalho';
import Corpo from './Corpo';
import Rodape from './Rodape';

export default function App() {
   
    const [quebrado, setQuebrado] = useState(false);

    return (
       
        <View style={{ flex: 1, paddingTop: 60, paddingBottom: 20 }}>
            <Cabecalho quebrado={quebrado} />
            <Corpo quebrado={quebrado} setQuebrado={setQuebrado} />
            <Rodape />
        </View>
    );
}