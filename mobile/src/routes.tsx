import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  ServiceDetails  from './pages/ServiceDetails';
import  ServicesMap  from './pages/ServicesMap';
import  SelectMapPosition from './pages/CreateService/SelectMapPosition';
import  ServiceData  from './pages/CreateService/ServiceData';
import Header from './components/Header';

const { Navigator, Screen } = createStackNavigator();


export default function Routes() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: '#f2f3f5'}}}>
                <Screen name="ServicesMap" component={ServicesMap} />
                <Screen name="ServiceDetails" 
                    component={ServiceDetails} 
                    options={{ 
                        headerShown: true, 
                        header: () => <Header showCancel={false} title='Serviço' />}} />
                <Screen name="SelectMapPosition" 
                    component={SelectMapPosition} 
                    options={{ 
                        headerShown: true, 
                        header: () => <Header title='Selecione no mapa' />}}/>
                <Screen name="ServiceData" 
                component={ServiceData}
                options={{ 
                    headerShown: true, 
                    header: () => <Header title='Informe os dados pra cadastro' />}} />
            </Navigator>
        </NavigationContainer>
    )
}