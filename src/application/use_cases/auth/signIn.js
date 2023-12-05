const signIn = (email, password, authService, userRepository) => {
  try {
    if (!email || !password) throw new Error("Email or password not provided");

    const user = userRepository.findByProperty({ email });

    if (!user.length) throw new Error("User not found");

    const passwordCheck = authService.compare(password, user[0]._doc.password);

    if (!passwordCheck) throw new Error("Unauthorized User");

    return authService.generateToken(user[0]._doc._id);
  } catch (error) {
    console.error(error);
    throw new Error("Internal server error signing in user");
  }
};

export default signIn;
