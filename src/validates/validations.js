import * as yup from "yup";

export const login = yup.object().shape({
  email: yup.string().email("El correo no es valido").required("Agrega un correo"),
  password: yup.string().min(8, "Contraseña de minimo 8 caracteres").max(32, "Contraseña de maximo 32 caracteres").required("Contraseña requerida"),
});

export const products = yup.object().shape({
  name: yup.string().required("Nombre requerido"),
  subtitle: yup.string().required("Subtitulo requerido"),
  description: yup.string().required("Descripción requerida"),
  price: yup.string().required("Precio requerido").max(5, "Precio de maximo 5 caracteres"),
  image: yup.string().required("Imagen requerida"),
});

export const membership = yup.object().shape({
  name: yup.string().required("Nombre requerido"),
  benefits: yup.string().required("Descripción corta requerido"),
  description: yup.string().required("Descripción requerida"),
  price: yup.string().required("Precio requerido").max(5, "Precio de maximo 5 caracteres"),
});
