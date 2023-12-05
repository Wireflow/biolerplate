const findByProperty = (params, userRepository) => {
  try {
    return userRepository.findByProperty(params);
  } catch (error) {
    console.error(error);
    throw new Error("Internal server error finding user with properties");
  }
};

export default findByProperty;
