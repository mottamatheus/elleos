import React, { useEffect, useState} from 'react';
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';
import mapMarker from '../images/map-marker.png';
import { Feather } from '@expo/vector-icons';

import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import api from '../services/api';


interface Service {
  id: number,
  name: string,
  latitude: number,
  longitude: number
}

export default function ServicesMap() {

    const [services, setServices] = useState<Service[]>([]);
    const navigation = useNavigation();

    useFocusEffect(
      React.useCallback(() => {
      api.get('services').then(response => {
        setServices(response.data)
      })}, [])
      )

    function handleNavigateToServiceDetails(id: number) {
        navigation.navigate('ServiceDetails', { id }); 
    }

    function handleNavigateToCreateService() {
      navigation.navigate('SelectMapPosition');
    }

    return (
        <View style={styles.container}>
      <MapView style={styles.map}
      provider={PROVIDER_GOOGLE}
      initialRegion={{
        latitude: -30.034075,
        longitude: -51.2198978,
        latitudeDelta: 0.008,
        longitudeDelta: 0.008
      }} >

      {services.map(service => {
        return (
          <Marker
        key={service.id}
        icon={mapMarker}
        calloutAnchor={{
          x: 2.6,
          y: 0.8
        }}
        coordinate={{
          latitude: service.latitude,
        longitude: service.longitude
        }} >
          <Callout tooltip onPress={() => handleNavigateToServiceDetails(service.id)}>
            <View style={styles.calloutContainer}>
              <Text style={styles.calloutText}>{service.name}</Text>
            </View>
          </Callout>
          </Marker>
        )
      })}
      </MapView>
      <View style={styles.footer}>
        <Text style={styles.footerText}>{services.length} locais encontrados</Text>
        <RectButton style={styles.createServiceButton} onPress={handleNavigateToCreateService}>
          <Feather name='plus' size={20} color='#FFF'/>
        </RectButton>
      
      </View>
    </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1
    },
  
    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
  
    calloutContainer: {
      flex: 1,
      width: 160,
      paddingHorizontal: 16,
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      borderRadius: 16,
      justifyContent: 'center',
    },
  
    calloutText: {
      paddingVertical: 15,
      color: '#1b9cfc',
      fontSize: 15,
      fontFamily: 'Nunito_700Bold',
      textAlign: 'center'
    },
  
    footer: {
      position: 'absolute',
      left: 24,
      right: 24,
      bottom: 32,
      backgroundColor: '#fff',
      borderRadius: 20,
      height: 56,
      paddingLeft: 24,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      elevation: 3,
    },
  
    footerText: {
      fontFamily: 'Nunito_700Bold',
      color: '#8fa7b3'
  
    },
  
    createServiceButton: {
      width: 56,
      height: 56,
      backgroundColor: '#1b9cfc',
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center'
      
    }
  });
  