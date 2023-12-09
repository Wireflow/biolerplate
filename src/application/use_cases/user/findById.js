import serverError from "../../../webserver/express/serverError.js";

const findById = async (id, userRepository) => {
  if (!id) throw serverError("User id cannot be empty", { status: 404 });

  return await userRepository.findById(id);
};

export default findById;
