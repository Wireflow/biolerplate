import user from "../../../entities/user";

const addUser = (email, password, userRepository, authService) => {
  try {
    // TODO: add proper validation
    if (!email || !password) {
      throw new Error("Email or passwords cannot be empty");
    }

    const newUser = user({
      email,
      password: authService.encryptPassword(password),
    });

    const userEmail = userRepository.findByProperty({ email });

    if (userEmail.length)
      throw new Error(`User with email: ${userEmail} already exists`);

    return userRepository.add(newUser);
  } catch (error) {
    console.error(error);
    throw new Error("Internal server error adding user");
  }
};

export default addUser;
