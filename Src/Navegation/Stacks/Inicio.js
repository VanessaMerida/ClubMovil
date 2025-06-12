import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons, MaterialIcons, AntDesign } from "@expo/vector-icons"; // Asegúrate de que AntDesign y MaterialIcons estén instalados
import { useNavigation } from "@react-navigation/native";

export default function InicioScreen() {
  const navigation = useNavigation();

  // Función para manejar el clic en un contenedor y navegar
  // 'stackName' debe ser el nombre del RootStack.Screen (ej. 'Asociado')
  // 'initialScreenInStack' debe ser la ruta inicial dentro de ese stack (ej. 'ListarAsociado')
  const handlePress = (stackName, initialScreenInStack) => {
    console.log(`Navegando a la pantalla ${initialScreenInStack} en el Stack ${stackName}`);
    navigation.navigate(stackName, { screen: initialScreenInStack });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Menú Principal</Text> {/* Título principal */}
      <Text style={styles.headerSubtitle}>Selecciona una opción para empezar</Text> {/* Subtítulo */}

      <View style={styles.gridContainer}>
        {/* Card 1: Asociados */}
        <CardOpcion
          icon={<Ionicons name="people-outline" size={40} color="#1E90FF" />} // Icono azul
          title="Asociados"
          description="Gestiona la información de tus asociados."
          onPress={() => handlePress('Asociados', 'ListarAsociado')}
          iconBgColor="#E0F7FA" // Fondo claro para el icono
        />

        {/* Card 2: Actividades */}
        <CardOpcion
          icon={<Ionicons name="calendar-outline" size={40} color="#4CAF50" />} // Icono verde
          title="Actividades"
          description="Consulta y registra nuevas actividades."
          onPress={() => handlePress('Actividades', 'ListarActividades')}
          iconBgColor="#E8F5E9" // Fondo claro para el icono
        />

        {/* Card 3: Participaciones */}
        <CardOpcion
          icon={<Ionicons name="document-text-outline" size={40} color="#FFD700" />} // Icono amarillo
          title="Participaciones"
          description="Administra las participaciones en eventos."
          onPress={() => handlePress('Participaciones', 'ListarParticipaciones')}
          iconBgColor="#FFFDE7" // Fondo claro para el icono
        />

        {/* Card 4: Préstamos */}
        <CardOpcion
          icon={<Ionicons name="cash-outline" size={40} color="#FF6347" />} // Icono rojo
          title="Préstamos"
          description="Lleva un registro de los préstamos realizados."
          onPress={() => handlePress('Prestamos', 'ListarPrestamos')}
          iconBgColor="#FFEBEE" // Fondo claro para el icono
        />
      </View>
    </View>
  );
}

// Componente individual para cada Card
function CardOpcion({ icon, title, description, onPress, iconBgColor }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={[styles.cardIconContainer, { backgroundColor: iconBgColor }]}>
        {icon}
      </View>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardDescription}>{description}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F0F4F8', // Fondo gris claro, como en la imagen
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333', // Color oscuro para el título
    marginTop: 20,
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
    color: '#666', // Color gris para el subtítulo
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between', // Para que haya espacio entre las tarjetas
    width: '100%',
    maxWidth: 600, // Limita el ancho en pantallas grandes
  },
  card: {
    width: '48%', // Permite dos tarjetas por fila con un pequeño espacio
    backgroundColor: '#FFFFFF', // Fondo blanco para las tarjetas
    borderRadius: 16, // Bordes redondeados
    padding: 15,
    marginBottom: 18, // Espacio entre filas
    alignItems: 'center',
    justifyContent: 'flex-start', // Alinea el contenido desde arriba
    minHeight: 160, // Altura mínima para que se vean bien
    shadowColor: '#000', // Sombra para un efecto 3D sutil
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4, // Sombra para Android
  },
  cardIconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30, // Círculo perfecto
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
    textAlign: 'center',
  },
  cardDescription: {
    fontSize: 12,
    color: '#777',
    textAlign: 'center',
  },
});