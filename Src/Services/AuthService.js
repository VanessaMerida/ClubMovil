import api from "./Conexion";
import AsyncStorage from "@react-native-async-storage/async-storage";



export const loginUser = async ( email, password) => {
  try {
    const response = await api.post("/login", { email, password });
    const { token } = response.data;
    await AsyncStorage.setItem("userToken", token);
    return { success: true, token };
  } catch (error) {
    console.error(
      "Error de login:",
      error.response ? error.response.data : error.message
    );
    return {
      success: false,
      message: error.response
        ? error.response.data.message
        : "Error al conectar",
    };
  }
};

export const logoutUser = async () => {
  try {
    await api.post("/logout");
    await AsyncStorage.removeItem("userToken");
    return { success: true };
  } catch (error) {
    console.error("Error al cerrar sesión:", error.response ? error.response.data : error.message);
    return { success: false, message: error.response ? error.response.data.message : "Error al cerrar sesión" };
  }
};

// Registro de usuario
export const registerUser = async (name, email, password) => {
  try {
    const response = await api.post("/registrar", {name, email, password });
    return { success: true, data: response.data };
  } catch (error) {
    console.error(
      "Error de registro:",
      error.response ? error.response.data : error.message
    );
    return {
      success: false,
      message: error.response ? error.response.data.message : "Error al conectar",
    };
  }
};