import React from 'react';
import { View , Button} from 'react-native';
import{useNavigation}from '@react-navigation/native';
import Logo from '../components/Logo';
import Nome from '../components/Nome';
import Banner from '../components/Banner';
import BottomGrid from '../components/BottomGrid';

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
    <View style={{ flex: 1, backgroundColor: '#00309B',justifyContent:'center',}}>

      <Logo />
      <Nome/>
      <BottomGrid />
        
        

        <Banner />
        <Button title="Ir para B" onPress={openSreen}/>

    </View>
  );
}

