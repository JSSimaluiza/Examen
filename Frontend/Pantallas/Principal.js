import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ImageBackground, TouchableOpacity, Text } from 'react-native';

export default function Principal({ navigation }) {
  return (
    <ImageBackground
      source={require('../assets/Uce.jpeg')}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.containerSesion}>
        <TouchableOpacity
          style={styles.buttonSesion}
          onPress={() => navigation.navigate('Splash')}
        >
          <Text style={styles.buttonTextSesion}>Continuar</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  containerSesion: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 30, // Ajusta este valor según la separación deseada del borde inferior
  },
  buttonSesion: {
    backgroundColor: 'transparent', // Color de fondo transparente
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
    width: '35%', // Ajusta este valor según el ancho deseado del botón
    borderWidth: 1, // Borde opcional para mejor visibilidad
    borderColor: 'white', // Color del borde
  },
  buttonTextSesion: {
    color: '#fff', // Color del texto
    fontSize: 18,
    fontWeight: 'bold',
  },
});
