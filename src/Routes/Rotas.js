import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';

import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Cadastro from '../Pages/Cadastro';
import Inserir from '../Pages/Inserir';


const Tab = createBottomTabNavigator();

export default function Rotas() {

    const { logado, cadastro, setCadastro} = useContext(AuthContext);

    if (!logado && !cadastro ) {
        return (<Login />)
    }

    if( !logado && cadastro ) {
        return ( <Cadastro />)
    }

    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        backgroundColor: '#191919',
                    },
                    tabBarActiveTintColor: "white"
                }}
            >
                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="home" color={color} size={size} />
                        ),
                    }}
                />
            
                <Tab.Screen
                    name="Inserir"
                    component={Inserir}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="plus-box" color={color} size={size} />
                        ),
                    }}
                />


            </Tab.Navigator>
        </NavigationContainer>
    )
}