import addUser from "../../application/use_cases/user/add.js";
import addAvatar from "../../application/use_cases/user/addAvatar.js";
import updateById from "../../application/use_cases/user/updateById.js";
import findById from "../../application/use_cases/user/findById.js";
import findByProperty from "../../application/use_cases/user/findByProperty.js";

const userController = (
  userDbRepository,
  userDbRepositoryImpl,
  authServiceInterface,
  authServiceImpl
) => {
  const dbRepository = userDbRepository(userDbRepositoryImpl());
  const authService = authServiceInterface(authServiceImpl());

  const addNewUser = async (req, res, next) => {
    try {
      const { email, password } = req.body;

      const user = await addUser(email, password, dbRepository, authService);

      res.json(user);
    } catch (err) {
      next(err);
    }
  };

  const addUserAvatar = async (req, res, next) => {
    try {
      const { base64, userId } = req.body;

      const user = await addAvatar(userId, base64, dbRepository);

      res.json(user);
    } catch (err) {
      next(err);
    }
  };

  const updateUserById = async (req, res, next) => {
    try {
      const { firstname, lastname, email, userId } = req.body;

      const user = await updateById(
        userId,
        firstname,
        lastname,
        email,
        dbRepository
      );

      res.json(user);
    } catch (err) {
      next(err);
    }
  };

  const findUserById = async (req, res, next) => {
    try {
      const { id } = req.params;

      const user = await findById(id, dbRepository);

      res.json(user);
    } catch (err) {
      next(err);
    }
  };

  const findUserByProperty = async (req, res, next) => {
    try {
      // Using the url ex. localhost/api/users?email=john@gmail.com
      const params = { ...req.query };

      const user = await findByProperty(params, dbRepository);

      res.json(user);
    } catch (err) {
      next(err);
    }
  };

  return {
    addNewUser,
    addUserAvatar,
    updateUserById,
    findUserById,
    findUserByProperty,
  };
};

export default userController;
