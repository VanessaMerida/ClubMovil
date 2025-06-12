import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BotonComponent from '../../Components/BotonComponent';
import { useNavigation } from '@react-navigation/native';
export default function EditarAsociado() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edición de Asociado</Text>
      <BotonComponent
        title="Volver a Listar Asociados"
        onPress={() => navigation.navigate('ListarAsociado')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
  },
  button: {
    marginTop: 50,
    backgroundColor: "#007BFF",
    color: "#fff",
    padding: 10,
    borderRadius: 5,
  },
});