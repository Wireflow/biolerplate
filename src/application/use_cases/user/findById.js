const findById = (id, userRepository) => {
  try {
    return userRepository.findById(id);
  } catch (error) {
    throw new Error("Error finding user by id");
  }
};

export default findById;
