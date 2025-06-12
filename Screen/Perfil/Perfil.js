import { View, Text, StyleSheet } from 'react-native';

export default function ConfiguracionScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil</Text>
      <Text style={styles.subtitle}>Aquí puedes ajustar el perfil del usuario.</Text>
      {/* Aquí puedes agregar más componentes o lógica para la pantalla de configuración */}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333'
  },
  subtitle: {
    fontSize: 16,
    color: '#666'
  }
});