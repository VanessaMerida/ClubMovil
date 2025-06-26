import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Ionicons } from '@expo/vector-icons';

import InicioScreen from './Stacks/Inicio';
import AsociadosStack from './Stacks/AsociadoStack';
import ActividadesStack from './Stacks/ActividadesStack';
import PerfilStack from './Stacks/PerfilStack';

import ConfiguracionStack from './Stacks/ConfiguracionStack';
import ParticipacionesStack from './Stacks/ParticipacionesStack';
import PrestamosStack from './Stacks/PrestamosStack';
import LoginScreen from '../../Screen/Auth/Login';
import RegistroScreen from '../../Screen/Auth/Registro';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// 👉 Tabs inferiores: Inicio, Perfil, Configuración
function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#1976D2",
        tabBarInactiveTintColor: "#757575",
        headerStyle: {
          backgroundColor: '#2a86ff', // Verde para perfil
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Tab.Screen
        name="Inicio"
        component={InicioScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={PerfilStack} // puedes cambiar este
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="user" size={size} color={color} />
            
          ),
        }}
      />
      <Tab.Screen
        name="Configuración"
        component={ConfiguracionStack} // puedes cambiar este también
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Iniciar Sesion"
        component={LoginScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

// 👉 Navegador principal: incluye Tabs + otras pantallas
export default function NavegacionPrincipal() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Tabs" component={Tabs} />
      <Stack.Screen name="Asociados" component={AsociadosStack} />
      <Stack.Screen name="Participaciones" component={ParticipacionesStack} />
      <Stack.Screen name="Actividades" component={ActividadesStack} />
      <Stack.Screen name="Prestamos" component={PrestamosStack} />
      <Stack.Screen name="Registro" component={RegistroScreen} />
    </Stack.Navigator>
  );
}