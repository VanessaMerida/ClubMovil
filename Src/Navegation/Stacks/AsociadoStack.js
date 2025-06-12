import { createStackNavigator } from '@react-navigation/stack';
import PantallaAsociado from '../../../Screen/Asociado/ListarAsociado';
import PantallaDetalleAsociado from '../../../Screen/Asociado/DetalleAsociado';
import PantallaEditarAsociado from '../../../Screen/Asociado/EditarAsociado';

const Stack = createStackNavigator();

export default function AsociadoStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#6200EE', // Morado para asociados
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold'
                }
            }}>
            
            <Stack.Screen 
                name="ListarAsociado" 
                component={PantallaAsociado} 
                options={{ title: 'Gestión de Asociados' }} 
            />
            <Stack.Screen
                name="DetalleAsociado" 
                component={PantallaDetalleAsociado} 
                options={{ title: 'Detalle Asociado' }}
            />
            <Stack.Screen
                name="EditarAsociado" 
                component={PantallaEditarAsociado} 
                options={{ title: 'Editar Asociado' }}
            />
          
        </Stack.Navigator>
    );
}

