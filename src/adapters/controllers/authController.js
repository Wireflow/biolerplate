import signIn from "../../application/use_cases/auth/signIn.js";

const authController = (
  userDbRepository,
  userDbRepositoryImpl,
  authServiceInterface,
  authServiceImpl
) => {
  const dbRepository = userDbRepository(userDbRepositoryImpl());
  const authService = authServiceInterface(authServiceImpl());

  const loginUser = async (req, res, next) => {
    try {
      const { email, password } = req.body;

      const token = await signIn(email, password, authService, dbRepository);

      res.json(token);
    } catch (err) {
      next(err);
    }
  };

  return {
    loginUser,
  };
};

export default authController;
