import serverError from "../../../webserver/express/serverError.js";

const signIn = async (email, password, authService, userRepository) => {
  if (!email || !password) {
    throw serverError("Email or passwords cannot be empty", { status: 401 });
  }

  const user = await userRepository.findByProperty({ email });

  if (!user.length) throw serverError("User does not exist", { status: 401 });

  const passwordCheck = authService.compare(password, user[0].password);

  if (!passwordCheck) throw serverError("User unauthorized", { status: 401 });

  return authService.generateToken(user[0]._doc._id);
};

export default signIn;
