import {createStackNavigator} from '@react-navigation/stack';
import PantallaLogin from '../../Screen/Auth/Login';
import PantallaRegistro from '../../Screen/Auth/Registro';
import PantallaAsociado from '../../Screen/Asociado/ListarAsociado';
import PantallaDetalleAsociado from '../../Screen/Asociado/DetalleAsociado';
import PantallaEditarAsociado from '../../Screen/Asociado/EditarAsociado';


const Stack = createStackNavigator();

export default function AuthNavegacion() {
    return (
        <Stack.Navigator>

            <Stack.Screen 
                name="Login" 
                component={PantallaLogin} 
                options={{ title: 'Iniciar Sesión'}} 
            />
            <Stack.Screen 
                name="Registro" 
                component={PantallaRegistro} 
                options={{ title: 'Registrarse'}} 
            />
            <Stack.Screen 
                name="ListarAsociado" 
                component={PantallaAsociado} 
                options={{ title: 'Listar Asociados'}} 
            />
            <Stack.Screen
                name="DetalleAsociado" 
                component={PantallaDetalleAsociado} 
                options={{ title: 'Detalle Asociado'}}
            />
            <Stack.Screen
                name="EditarAsociado" 
                component={PantallaEditarAsociado} 
                options={{ title: 'Editar Asociado'}}
            />
        </Stack.Navigator>
    );
}