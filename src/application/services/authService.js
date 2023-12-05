const authService = (service) => {
  const encryptPassword = (password) => service.encryptPassword(password);

  const compare = (password, hashedPassword) =>
    service.compare(password, hashedPassword);

  const verifyToken = (token) => service.verifyToken(token);

  const generateToken = (payload) => service.generateToken(payload);

  return { encryptPassword, compare, verifyToken, generateToken };
};

export default authService;
