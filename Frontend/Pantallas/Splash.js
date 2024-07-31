import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Image } from 'expo-image';

const SplashScreens = ({ navigation }) => {
  useEffect(() => {
    // Duración del GIF en milisegundos
    const splashDuration = 2500; // Ajusta este valor según la duración del GIF

    const timer = setTimeout(() => {
      navigation.navigate('Logica'); // Redirige a la pantalla "Logica"
    }, splashDuration);

    return () => clearTimeout(timer); // Limpia el temporizador cuando el componente se desmonta
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/R.gif')}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'skyblue',
  },
  image: {
    width: '15%',
    height: '10%',
  },
});

export default SplashScreens;