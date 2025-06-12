// En Src/Navegation/Stacks/ActividadesStack.js
import { createStackNavigator } from "@react-navigation/stack";
import ListarActividades from "../../../Screen/Actividades/ListarActividades";

const Stack = createStackNavigator();

export default function ActividadesStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#ff9800", // Naranja para actividades
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="ListarActividades"
        component={ListarActividades}
        options={{ title: "Gestión de Actividades" }}
      />
    </Stack.Navigator>
  );
}
