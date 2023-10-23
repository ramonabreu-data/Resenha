import {NavigationContainer} from  '@react-navigation/native';

{/*Crindo contexto de navigation */}

import { StackRoutes } from './Stack.routes';
export function Routes(){
    return (
        <NavigationContainer>
            <StackRoutes/>
            
        </NavigationContainer>
    )
}