import React from 'react';
import { View , Button} from 'react-native';
import{useNavigation}from '@react-navigation/native';

{/*tipagem de rotas */}

type StackParamList = {
    ScreenA: undefined;
    ScreenB: undefined;
}



export function ScreenA() {

    const navigation = useNavigation();

    function openSreen(){
        navigation.navigate('ScreenB');
    }
    
  return (
    <View style={{ flex: 1, backgroundColor: 'red',justifyContent:'center',}}>
        <Button title="Ir para B" onPress={openSreen}/>

    </View>
  );
}

