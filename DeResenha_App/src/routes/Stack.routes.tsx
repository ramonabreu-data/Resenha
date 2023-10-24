import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import { ScreenA } from '../screens/ScreenA';
import { ScreenB } from '../screens/ScreenB';
import { Agendamentos } from '../screens/Agendamentos';
import { Complexo } from '../screens/Complexo';
import { Localizacao } from '../screens/Localizacao';
import { Redes } from '../screens/Redes';
import { ResenhaFc } from '../screens/ResenhaFc';
import { SoccerSchool } from '../screens/SoccerSchool';

const{Screen, Navigator} = createNativeStackNavigator();

export function StackRoutes(){
    return (
        <Navigator>
            <Screen 
            name="ScreenA" 
            options= {{title : "De Resenha SC",
            headerStyle:{
                backgroundColor: 'navy',
            },
            headerTintColor: 'white',
             }}
              component={ScreenA}   />
            {/**Pra esconder o tile uso: options={{headerShown: false}} */}



            <Screen name="ScreenB" component={ScreenB}/>
            <Screen name="Agendamentos" component={Agendamentos}/>
            <Screen name="Complexo" component={Complexo}/>
            <Screen name="Localizacao" component={Localizacao}/>
            <Screen name="Redes" component={Redes}/>
            <Screen name="ResenhaFC" component={ResenhaFc}/>
            <Screen name="SoccerSchool" component={SoccerSchool}/>
        </Navigator>    
    )
}