import React from 'react';
import { View , Button} from 'react-native';
import{NativeStackScreenProps}from '@react-navigation/native-stack'

{/*tipagem de rotas */}

type StackParamList = {
    ScreenA: undefined;
    ScreenB: undefined;
}
type StackProps= NativeStackScreenProps<StackParamList, 'ScreenA'>;

type Props={
    routes:StackProps;
    
}

export function ScreenA({routes}: Props) {

    function openSreenB(){
        const { navigation } = routes;
        navigation.navigate('ScreenB');
        
    }
  return (
    <View style={{ flex: 1, backgroundColor: 'red',justifyContent:'center',}}>
        <Button title="Ir para B" onPress={openSreenB}/>

    </View>
  );
}

