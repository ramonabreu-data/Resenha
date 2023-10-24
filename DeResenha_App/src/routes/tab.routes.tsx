import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import React from 'react';
import { ScreenA } from '../screens/ScreenA';
import { ScreenB } from '../screens/ScreenB';
import { Agendamentos } from '../screens/Agendamentos';
import { Complexo } from '../screens/Complexo';
import { Localizacao } from '../screens/Localizacao';
import { Redes } from '../screens/Redes';
import { ResenhaFc } from '../screens/ResenhaFc';
import { SoccerSchool } from '../screens/SoccerSchool';


const{Screen, Navigator} = createBottomTabNavigator();

export function TabRoutes(){
    return (
        <Navigator
            screenOptions={{
                tabBarActiveTintColor:'navy',
                tabBarInactiveTintColor:'gray',

            }}
        >
            
            <Screen 
            name="ScreenA" 
            options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                    <FontAwesome
                    name="home" size={size} color={color}/>
                )

            }}
            
              component={ScreenA}   />
            {/**Pra esconder o tile uso: options={{headerShown: false}} */}



            <Screen name="ScreenB" component={ScreenB}/>

            
        </Navigator>    
    )
}