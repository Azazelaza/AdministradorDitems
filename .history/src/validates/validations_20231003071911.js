import * as yup from "yup";

export const login = yup.object().shape({
  email: yup.string().email("El correo no es valido").required("Agrega un correo"),
  password: yup.string().min(8, "Contraseña de minimo 8 caracteres").max(32, "Contraseña de maximo 32 caracteres").required("Contraseña requerida"),
});
