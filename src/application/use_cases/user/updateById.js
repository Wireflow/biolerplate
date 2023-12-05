import user from "../../../entities/user";

const updateById = (id, firstname, lastname, email, userRepository) => {
  try {
    if (!id) throw new Error("User id cannot be empty");

    if (!firstname && !lastname && !email) throw new Error("No info to update");

    const updatedUser = user({ firstname, lastname, email });

    return userRepository.updateById(id, updatedUser);
  } catch (error) {
    console.error(error);
    throw new Error("Internal server error updating user");
  }
};

export default updateById;
