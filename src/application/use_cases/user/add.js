import user from "../../../entities/user.js";
import serverError from "../../../webserver/express/serverError.js";

const addUser = async (email, password, userRepository, authService) => {
  // TODO: add proper validation
  if (!email || !password)
    throw serverError("Email or password cannot be empty", { status: 404 });

  const newUser = user({
    email,
    password: authService.encryptPassword(password),
  });

  const userEmail = await userRepository.findByProperty({ email });

  if (userEmail.length)
    throw serverError(`User with email: ${userEmail[0].email} already exists`, {
      status: 409,
    });

  return await userRepository.add(newUser);
};

export default addUser;
