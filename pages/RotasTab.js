import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons} from '@expo/vector-icons';

import Home from "./Home.js"
import Evento from "./Evento.js"
import Placar from "./Placar.js"

const Tab = createBottomTabNavigator();

export default function RotasTab(){
    return(
        <Tab.Navigator initialRouteName="Home">
            <Tab.Screen
            name="Eventos"
            component={Evento}
            options={{
                tabBarIcon:({color,size})=><MaterialCommunityIcons name="calendar-range" color={color} size={size}/>}}
                />
            
            <Tab.Screen
            name="Home"
            component={Home}
            options={{
                tabBarIcon:({color,size})=><MaterialCommunityIcons name="home-outline" color={color} size={size}/>}}    
            />

            <Tab.Screen
            name="Placar"
            component={Placar}
            options={{
                tabBarIcon:({color,size})=><MaterialCommunityIcons name="exclamation-thick" color={color} size={size}/>}}
                />
        </Tab.Navigator>
    )
}