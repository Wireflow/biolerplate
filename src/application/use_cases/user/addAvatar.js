import user from "../../../entities/user";

const addAvatar = (id, base64, userRepository) => {
  try {
    if (!id) throw new Error("User id cannot be empty");

    const isUserFound = userRepository.findById(id);

    if (!isUserFound) throw new Error("User not found");

    const userAvatar = user({ avatar: base64 });

    return userRepository.addAvatar(id, userAvatar);
  } catch (error) {
    console.error(error);
    throw new Error("Internal server error adding user avatar");
  }
};

export default addAvatar;
