// En Src/Navegation/Stacks/ParticipacionesStack.js
import { createStackNavigator } from '@react-navigation/stack';
import ListarParticipaciones from '../../../Screen/Participaciones/ListarParticipaciones';
import DetalleParticipacion from '../../../Screen/Participaciones/DetalleParticipacion'; // Opcional

const Stack = createStackNavigator();

export default function ParticipacionesStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#2a86ff',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
                    fontWeight: 'bold'
                }
      }}
    >
      <Stack.Screen 
        name="ListarParticipaciones" 
        component={ListarParticipaciones}
        options={{ title: 'Gestión de Participaciones' }}
      />
      
      {/* Pantalla de detalle opcional */}
      {/* <Stack.Screen
        name="DetalleParticipacion"
        component={DetalleParticipacion}
        options={{ title: 'Detalle' }}
      /> */}
    </Stack.Navigator>
  );
}