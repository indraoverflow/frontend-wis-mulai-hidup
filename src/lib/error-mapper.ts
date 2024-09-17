export const errorMapper = (error: string) => {
  switch (error) {
    case "PASSWORD_NOT_MATCH":
      return "Email atau kata sandi salah";
    case "USER_NOT_FOUND":
      return "Email atau kata sandi salah";
    case "PHONE_NUMBER_ALREADY_EXISTS":
      return "Nomor handphone sudah terdaftar";
    case "EMAIL_ALREADY_EXISTS":
      return "Email sudah terdaftar";
    default:
      return "Terjadi kesalahan, silakan coba beberapa saat lagi";
  }
};
