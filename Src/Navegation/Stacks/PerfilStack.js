import { createStackNavigator } from "@react-navigation/stack";
import PerfilScreen from "../../../Screen/Perfil/Perfil"; // Asegúrate de que esta ruta es correcta

const Stack = createStackNavigator();

export default function PerfilStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        // OPCIÓN 1: Ocultar completamente el encabezado del Stack Navigator
        headerShown: false, // <-- ¡Esto ocultará el título "Perfil" de la barra superior!
        headerStyle: {
          backgroundColor: "#4CAF50", // Verde para perfil
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },

      }}
    >
      <Stack.Screen
        name="Perfil" // Este es el nombre interno de la ruta, no el título visible
        component={PerfilScreen}
        options={{

        }}
      />

    </Stack.Navigator>
  );
}