import user from "../../../entities/user.js";
import serverError from "../../../webserver/express/serverError.js";

const addAvatar = async (id, base64, userRepository) => {
  if (!id) throw serverError("User id cannot be empty", { status: 404 });

  const isUserFound = await userRepository.findById(id);

  if (!isUserFound) throw serverError("User does not exist", { status: 404 });

  const userAvatar = user({ avatar: base64 });

  return await userRepository.addAvatar(id, userAvatar);
};

export default addAvatar;
