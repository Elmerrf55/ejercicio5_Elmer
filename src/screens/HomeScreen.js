import React from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Text, Button } from 'react-native-paper';

const HomeScreen = ({ logueado, setLogueado }) => {
  const ip = '10.10.1.9';
  const url = `http://${ip}/coffeeshop/api/services/admin/administrador.php?action=logOut`;

  const handleLogOut = async () => {
    try {
      const response = await fetch(url, { method: 'POST' });
      const datos = await response.json();

      if (datos.status) {
        setLogueado(!logueado);
      } else {
        console.error(datos);
        Alert.alert('Error sesion', datos.error);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      Alert.alert('Error', 'Hubo un problema al cerrar sesión.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>¡Bienvenido a la aplicación!</Text>
      <Button mode="contained" onPress={handleLogOut} style={styles.button}>
        Cerrar Sesión
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6200ee',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    padding: 10,
    backgroundColor: '#6200ee',
  },
});

export default HomeScreen;
