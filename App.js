import React, { useState } from 'react';
import { View } from 'react-native';
import Cabecalho from './Cabecalho';
import Corpo from './Corpo';
import Rodape from './Rodape';

export default function App() {
    const [quebrado, setQuebrado] = useState(false);

    return (
        // O flex: 1 faz ocupar a tela toda do iPhone. O backgroundColor muda tudo!
        <View style={{ flex: 1, justifyContent: 'space-between', backgroundColor: quebrado ? '#1a1a1a' : '#fff' }}>
            <Cabecalho quebrado={quebrado} />
            <Corpo quebrado={quebrado} setQuebrado={setQuebrado} />
            <Rodape quebrado={quebrado} />
        </View>
    );
}