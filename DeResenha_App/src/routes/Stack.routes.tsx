import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import { ScreenA } from '../screens/ScreenA';
import { ScreenB } from '../screens/ScreenB';

const{Screen, Navigator} = createNativeStackNavigator();

export function StackRoutes(){
    return (
        <Navigator>
            <Screen name="ScreenA" component={ScreenA}/>
            <Screen name="ScreenB" component={ScreenB}/>
        </Navigator>    
    )
}