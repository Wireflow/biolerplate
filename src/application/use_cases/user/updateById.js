import user from "../../../entities/user.js";
import serverError from "../../../webserver/express/serverError.js";

const updateById = async (id, firstname, lastname, email, userRepository) => {
  if (!id) throw serverError("User id cannot be empty", { status: 404 });

  if (!firstname && !lastname && !email)
    throw serverError("Name and email are null", { status: 404 });

  const updatedUser = user({ firstname, lastname, email });

  return await userRepository.updateById(id, updatedUser);
};

export default updateById;
