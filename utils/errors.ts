export const getErrorMessage = (code: string) => {
  switch (code) {
    case "auth/user-not-found":
      return "Usuario no encontrado";
    case "auth/wrong-password":
      return "Contraseña incorrecta";
    case "auth/email-already-in-use":
      return "Este correo ya está registrado";
    case "auth/invalid-email":
      return "Correo inválido";
    case "auth/weak-password":
      return "La contraseña es muy débil";
    default:
      return "Ocurrió un error, intenta de nuevo";
  }
};
