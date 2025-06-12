import { createStackNavigator } from "@react-navigation/stack";
import ConfiguracionScreen from "../../../Screen/Configuracion/Configuracion";


const Stack = createStackNavigator();

export default function ConfiguracionStack() {
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
         name="Configuracion" // Este es el nombre interno de la ruta, no el título visible
         component={ConfiguracionScreen}
         options={{
 
         }}
       />
 
     </Stack.Navigator>
   );
 }
