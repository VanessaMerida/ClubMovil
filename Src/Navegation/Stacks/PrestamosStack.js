// En Src/Navegation/Stacks/PrestamosStack.js
import { createStackNavigator } from '@react-navigation/stack';
import ListarPrestamos from '../../../Screen/Prestamos/ListarPrestamos';
import DetallePrestamo from '../../../Screen/Prestamos/DetallePrestamo'; // Opcional


const Stack = createStackNavigator();

export default function PrestamoStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#4CAF50', // Verde para préstamos
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }}
    >
      <Stack.Screen 
        name="ListarPrestamos" 
        component={ListarPrestamos}
        options={{ title: 'Gestión de Préstamos' }}
      />
      
      {/* Pantallas adicionales (opcionales) */}
      {/* <Stack.Screen
        name="DetallePrestamo"
        component={DetallePrestamo}
        options={{ title: 'Detalle del Préstamo' }}
      />
      <Stack.Screen
        name="NuevoPrestamo"
        component={NuevoPrestamo}
        options={{ title: 'Nuevo Préstamo' }}
      /> */}
    </Stack.Navigator>
  );
}