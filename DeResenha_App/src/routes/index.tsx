import {NavigationContainer} from  '@react-navigation/native';

{/*Crindo contexto de navigation */}

import { StackRoutes } from './Stack.routes';

import { TabRoutes } from './tab.routes';

export function Routes(){
    return (
        
        <NavigationContainer>
            
            <TabRoutes />
           
            
        </NavigationContainer>
    )
}