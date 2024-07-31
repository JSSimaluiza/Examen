import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, Image } from 'react-native';
import axios from 'axios';
import logo from './assets/logo.png'; // Importar la imagen

export default function App() {
  const [inputText, setInputText] = useState('');
  const [result, setResult] = useState('');
  const [showThanksMessage, setShowThanksMessage] = useState(false);
  const [showClearButton, setShowClearButton] = useState(false);

  const handleClassify = () => {
    if (inputText.trim() === '') {
      Alert.alert('Error', 'El campo de texto no puede estar vacío.');
      return;
    }

    axios.post('http://192.168.0.7:5010/clasificar', {
      texto: inputText,
      etiquetas: ['Arte', 'Musica', 'Religión', 'Otros']
    })
    .then(response => {
      setResult(JSON.stringify(response.data));
      setShowThanksMessage(true); // Mostrar mensaje de agradecimiento
      setShowClearButton(true); // Mostrar botón de limpiar
    })
    .catch(error => {
      console.error(error);
      Alert.alert('Error', 'Hubo un problema con la solicitud. Intentelo nuevamente mas tarde.');
    });
  };

  const handleClear = () => {
    setInputText('');
    setResult('');
    setShowThanksMessage(false);
    setShowClearButton(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mi primera App consumiendo una Api</Text>
      <Text style={styles.title}>Clasificador de Textos</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingrese el texto a clasificar"
        value={inputText}
        onChangeText={setInputText}
      />
      <Button
        title="Clasificar texto"
        onPress={handleClassify}
        style={styles.button}
      />
      {result ? (
        <View style={styles.resultContainer}>
          <Text style={styles.result}>El texto ingresado pertenece a la categoría: {result}</Text>
          <Image source={logo} style={styles.logo} />
        </View>
      ) : null}
      {showThanksMessage && (
        <Text style={styles.thanksMessage}>Gracias por usar este aplicativo, Jhon Simaluiza lo agradece</Text>
      )}
      {showClearButton && (
        <Button
          title="Limpiar"
          onPress={handleClear}
          style={styles.clearButton}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#40e0d0',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  button: {
    width: '100%',
    height: 40,
    borderRadius: 10,
  },
  resultContainer: {
    alignItems: 'center',
  },
  result: {
    marginTop: 20,
    fontSize: 18,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginTop: 20,
  },
  thanksMessage: {
    marginTop: 20,
    fontSize: 18,
    fontStyle: 'italic',
    color: 'green',
  },
  clearButton: {
    marginTop: 20,
    borderRadius: 10,
  },
});